import { IpokemonInfo } from "@/types/common";
import { fetchPokemon, fetchPokemonTypes } from "./actions";
import Form from "@/components/ui/form";


const Home = async () => {
  const initialPokemonList:IpokemonInfo [] = await fetchPokemon();
  const initialPokemonTypes: IpokemonInfo[] = await fetchPokemonTypes();

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
