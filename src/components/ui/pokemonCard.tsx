import React from "react";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export function PokemonCard({ pokemon }) {
    console.log(pokemon,"pokemon----")
  return (
    <div>
      <div className="rounded-lg max-w-sm bg-white dark:bg-zinc-900">
        <Image
          src={`https://fakeimg.pl/250x100/`}
          alt="jordans"
          height="200"
          width="400"
          className="object-cover rounded-t-lg"
        />
        <p className="text-base font-semibold sm:text-xl text-[#506b7c] mt-4 mb-2 dark:text-neutral-200 p-4">
          {pokemon?.name}
        </p>

        <div className="flex gap-1 font-[#6ba3c5] p-4 items-center">
          <span className="text-sm  text-blue-500">Details</span>
          <ArrowRight width={16} height={16} className="text-blue-500" />
        </div>
      </div>
    </div>
  );
}
