'use client'

import React, { useState } from 'react';
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

  interface IPokemonType {
    name: string;
    url: string;
  }

  
const Form=()=> {
    const [pokemonList, setPokemonList] = useState<IPokemonDetail[]>([]);
    const [selectedPokemonType, setSelectedPokemonType] = useState<string | null>(
        null
      );
    const [searchQuery, setSearchQuery] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState<IPokemonType[]>([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState<
    IPokemonDetail[]
  >([]);
    const getSelectPlaceholder = () => {
        if (selectedPokemonType) {
          return selectedPokemonType;
        } else {
          return "All Type Pokemon";
        }
      };
  return (
   <div>
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
   </div>
  )
}

export default Form;