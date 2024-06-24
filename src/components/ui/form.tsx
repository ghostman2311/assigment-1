"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "@/components/ui/searchInput";

import { PokemonCard } from "@/components/ui/pokemonCard";

interface IPokemonType {
  name: string;
  url: string;
}

interface IPokemonDetail {
  name: string;
  url: string;
}

interface FormProps {
  initialPokemonList: IPokemonDetail[];
  initialPokemonTypes: IPokemonType[];
}

const Form: React.FC<FormProps> = ({
  initialPokemonList,
  initialPokemonTypes,
}) => {
  const [pokemonList, setPokemonList] =
    useState<IPokemonDetail[]>(initialPokemonList);
  const [pokemonTypes, setPokemonTypes] =
    useState<IPokemonType[]>(initialPokemonTypes);
  const [selectedPokemonType, setSelectedPokemonType] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPokemonList, setFilteredPokemonList] =
    useState<IPokemonDetail[]>(initialPokemonList);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPokemonList(pokemonList);
    }
  }, [pokemonList, searchQuery]);

  const handleSelectChange = async (value: string) => {
    setSelectedPokemonType(value === "all" ? null : value);

    if (value === "all") {
      setFilteredPokemonList(pokemonList);
    } else {
      const selectedType = pokemonTypes.find((type) => type.name === value);
      if (selectedType) {
        const data = await fetchPokemonByType(selectedType.url);
        setFilteredPokemonList(data);
      }
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredList = pokemonList.filter((pokemon: IPokemonDetail) => {
      return pokemon.name.toLowerCase().includes(query);
    });

    setFilteredPokemonList(filteredList);
  };

  const getSelectPlaceholder = () => {
    if (selectedPokemonType) {
      return selectedPokemonType;
    } else {
      return "All Type Pokemon";
    }
  };

  return (
    <>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={getSelectPlaceholder()}>
            {getSelectPlaceholder()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Pokemon Types</SelectLabel>
            <SelectItem value="all">All Type Pokemon</SelectItem>
            {pokemonTypes.map((type: IPokemonType, i: number) => (
              <SelectItem value={type.name} key={i}>
                {type.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex">
        <Search className="w-96" onChange={handleSearchChange} />
      </div>
    </>
  );
};

export default Form;
