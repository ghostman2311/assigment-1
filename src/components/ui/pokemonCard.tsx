import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IpokemonInfo } from "@/types/common";
import { capitalizeFirstLetter } from "@/lib/utils";

export function PokemonCard({ pokemon }: { pokemon: IpokemonInfo }) {
  return (
    <>
      <div className="rounded-lg max-w-sm bg-gray-200">
        <Image
          src={pokemon.imageUrl}
          alt="jordans"
          height={200}
          width={400}
          className="rounded-t-lg"
        />
        
        <p className="text-base font-semibold sm:text-xl text-[#506b7c] mt-4 mb-2 dark:text-neutral-200 p-4 ">
          {capitalizeFirstLetter(pokemon.name)}
        </p>
        <Link href={pokemon.name}>
          <div className="flex gap-1 font-[#6ba3c5] p-4 items-center">
            <span className="text-sm  text-blue-500">Details</span>
            <ArrowRight width={16} height={16} className="text-blue-500" />
          </div>
        </Link>
      </div>
    </>
  );
}
