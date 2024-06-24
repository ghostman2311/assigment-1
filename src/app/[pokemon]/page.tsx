import { PokemonDetailsCard } from "@/components/ui/pokemonDetailsCard";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchPokemon } from "../actions";
import { IpokemonInfo } from "@/types/common";
import { capitalizeFirstLetter } from "@/lib/utils";

interface IParams {
  params: { pokemon: string };
}

const Details = async ({ params }: IParams) => {
  const { pokemon } = params;
  const allPokemon: IpokemonInfo[] = await fetchPokemon();
  const pokemonInfo = allPokemon.find((item) => item.name === pokemon);

  return (
    <div className="flex min-h-screen min-w-screen flex-col p-10 gap-4 bg-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>
              {capitalizeFirstLetter(pokemon) || ""}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-center">
        <PokemonDetailsCard pokemonInfo={pokemonInfo} />
      </div>
    </div>
  );
};

export default Details;
