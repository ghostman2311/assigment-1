import React from "react";
import Image from "next/image";
import { IStats, IpokemonInfo } from "@/types/common";
import { capitalizeFirstLetter } from "@/lib/utils";

export function PokemonDetailsCard({ pokemonInfo}:{pokemonInfo:IpokemonInfo}) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <div className="bg-teal-200 p-5 flex justify-center">
        <Image
          src={pokemonInfo?.imageUrl}
          alt={pokemonInfo?.name}
          width={400}
          height={400}
        />
      </div>
      <div className="p-2 sm:px-6 sm:py-4 bg-yellow-300">
        <p className="text-gray-700 text-base">
          <strong>Name:</strong> {capitalizeFirstLetter(pokemonInfo?.name)}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Type:</strong> {pokemonInfo?.types.join(", ")}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Stats:</strong>{" "}
          {pokemonInfo?.stats.map((stat:IStats) => stat.name).join(", ")}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Abilities:</strong> {pokemonInfo?.abilities.join(", ")}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Some Moves:</strong>{" "}
          {pokemonInfo?.moves.slice(0, 5).join(", ")}
        </p>
      </div>
    </div>
  );
}
