"use client";

import React, { useEffect, useState } from "react";

import { PokemonCard } from "@/components/ui/pokemonCard";
import { fetchPokemon, fetchPokemonTypes, fetchPokemonByType } from "./actions";
import Form from "@/components/ui/form";

interface IPokemonDetail {
  name: string;
  url: string;
}

interface IPokemonType {
  name: string;
  url: string;
}

export default async function Home() {

 


  

  useEffect(() => {
    const fetchData = async () => {
      const types = await fetchPokemonTypes();
      setPokemonTypes(types);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon();
      setPokemonList(data);
      setFilteredPokemonList(data);
    };
    getPokemon();
  }, []);

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

  useEffect(() => {
    if (!searchQuery) {
      setFilteredPokemonList(pokemonList);
    }
  }, [pokemonList, searchQuery]);



  return (
    <main className="flex min-h-screen flex-col p-10 gap-3 bg-gray-100">
     <Form/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {filteredPokemonList.map((pokemon: IPokemonDetail, index: number) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}
