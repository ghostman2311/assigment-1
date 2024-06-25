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
import { PokemonCard } from "./pokemonCard";
import { IpokemonInfo } from "@/types/common";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Button } from "./ui/button";
import { Search } from "./searchInput";

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
    const filteredList = filteredPokemonList.filter((pokemon: IpokemonInfo) => {
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
        <SelectTrigger className="w-full sm:w-4/12">
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
      <div className="flex relative items-center w-full sm:w-6/12">
        <Search className="w-full pr-20" onChange={handleSearchChange} />
        <Button className="absolute right-0 rounded-l-none ">Search</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList?.map((pokemon: IpokemonInfo, index: number) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))
        ) : (
          <div className="mt-8 w-screen flex justify-center items-center">
            <p className="text-base font-semibold sm:text-xl text-[#506b7c] mt-4 mb-2 p-4 ">
              No Pokemon found
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
