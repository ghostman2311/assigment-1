import React, { useState } from "react";
import { fetchPokemon, fetchPokemonTypes } from "./actions";
import Form from "@/components/ui/form";
import { PokemonCard } from "@/components/ui/pokemonCard";


interface IPokemonDetail {
  name: string;
  url: string;
}

interface IPokemonType {
  name: string;
  url: string;
}

const Home = async () => {
  const initialPokemonList: IPokemonDetail[] = await fetchPokemon();
  const initialPokemonTypes: IPokemonType[] = await fetchPokemonTypes();

  return (
    <main className="flex min-h-screen flex-col p-10 gap-3 bg-gray-100">
      <Form
        initialPokemonList={initialPokemonList}
        initialPokemonTypes={initialPokemonTypes}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {initialPokemonList.map((pokemon: IPokemonDetail, index: number) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
};

export default Home;
