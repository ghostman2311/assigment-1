import { IpokemonInfo } from "@/types/common";
import { fetchPokemon, fetchPokemonTypes } from "./actions";
import FormWithList from "@/components/formWithList";

const Home = async () => {
  const initialPokemonList:IpokemonInfo [] = await fetchPokemon();
  const initialPokemonTypes: IpokemonInfo[] = await fetchPokemonTypes();

  return (
    <main className="flex min-h-screen flex-col p-5 sm:p-10 gap-3 bg-gray-100">
      <FormWithList
        initialPokemonList={initialPokemonList}
        initialPokemonTypes={initialPokemonTypes}
      />
    </main>
  );
};

export default Home;
