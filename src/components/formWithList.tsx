"use client";

import React from "react";
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
import { Button } from "./ui/button";
import { Search } from "./searchInput";
import { capitalizeFirstLetter } from "@/lib/utils";
import { usePokemonFilter } from "../hooks/usePokemonFilter";
import { IpokemonInfo } from "@/types/common";

interface FormProps {
  initialPokemonList: IpokemonInfo[];
  initialPokemonTypes: IpokemonInfo[];
}

const FormWithList: React.FC<FormProps> = ({ initialPokemonList, initialPokemonTypes }) => {
  const {
    pokemonTypes,
    filteredPokemonList,
    handleSelectChange,
    handleSearchChange,
    getSelectPlaceholder,
  } = usePokemonFilter(initialPokemonList, initialPokemonTypes);

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
            {pokemonTypes.map((type:IpokemonInfo, i:number) => (
              <SelectItem value={type.name} key={i}>
                {capitalizeFirstLetter(type.name)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex relative items-center w-full sm:w-6/12">
        <Search className="w-full pr-20" onChange={handleSearchChange} />
        <Button className="absolute right-0 rounded-l-none">Search</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map((pokemon, index) => (
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

export default FormWithList;
