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
import { PokemonCard } from "./pokemonCard";
import {IpokemonInfo } from "@/types/common";
import { capitalizeFirstLetter } from "@/lib/utils";

interface FormProps {
  initialPokemonList: IpokemonInfo[];
  initialPokemonTypes: IpokemonInfo[];
}

const Form: React.FC<FormProps> = ({
  initialPokemonList,
  initialPokemonTypes,
}) => {
  const [selectedPokemonType, setSelectedPokemonType] = useState<string | null>(
    null
  );
  const [filteredPokemonList, setFilteredPokemonList] =
    useState<IpokemonInfo[]>(initialPokemonList);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!selectedPokemonType) return;
    if (!query) {
      setFilteredPokemonList(
        initialPokemonList.filter((pokemon) =>
          pokemon.types.includes(selectedPokemonType)
        )
      );
    }
  }, [initialPokemonList, query, selectedPokemonType]);

  const handleSelectChange = async (value: string) => {
    setSelectedPokemonType(value === "all" ? null : value);

    if (value === "all") {
      setFilteredPokemonList(initialPokemonList);
    } else {
      setFilteredPokemonList(
        initialPokemonList.filter((pokemon) => pokemon.types.includes(value))
      );
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setQuery(query);
    const filteredList = filteredPokemonList.filter(
      (pokemon: IpokemonInfo) => {
        return pokemon.name.toLowerCase().includes(query);
      }
    );

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
            {initialPokemonTypes.map((type: IpokemonInfo, i: number) => (
              <SelectItem value={type.name} key={i}>
                {capitalizeFirstLetter(type.name)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex">
        <Search className="w-96" onChange={handleSearchChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {filteredPokemonList.map((pokemon: IpokemonInfo, index: number) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Form;
