// @ts-nocheck

import React, { useState } from "react";
import { fetchPokemon, fetchPokemonTypes } from "./actions";
import Form from "@/components/ui/form";
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
    </main>
  );
};

export default Home;
