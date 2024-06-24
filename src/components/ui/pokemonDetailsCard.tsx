import React from "react";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export function PokemonDetailsCard({}) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
    <div className="bg-teal-200 p-5 flex justify-center">
      <Image   src={`https://fakeimg.pl/300x200/`} alt='pokemon' width={400} height={400} />
    </div>
    <div className="px-6 py-4 bg-yellow-300">
    <p className="text-gray-700 text-base">
        <strong>Name:</strong> Charizard
      </p>
    
      <p className="text-gray-700 text-base">
        <strong>Type:</strong> fire, flying
      </p>
      <p className="text-gray-700 text-base">
        <strong>Stats:</strong> hp,attack,defence, special-attack,special-defense,speed
      </p>
      <p className="text-gray-700 text-base">
        <strong>Abilities:</strong> blaze,solar-power
      </p>
      <p className="text-gray-700 text-base">
        <strong>Some Moves:</strong>   mega-punch, fire-punch,thunder-punch,scratch,swords-dance
      </p>
    </div>
  </div>
    // <div>
    //   <div className="rounded-lg max-w-sm bg-white dark:bg-zinc-900">
    //     <Image
    //       src={`https://fakeimg.pl/250x200/`}
    //       alt="jordans"
    //       height="400"
    //       width="400"
    //       className="object-cover rounded-t-lg"
    //     />
    //     <div className="p-4">
    //       <div>
    //         {" "}
    //         <span className="text-base font-semibold">Name:</span>
    //         <p className="text-base font-normal">Charizard</p>
    //       </div>
    //       <div>
    //         {" "}
    //         <span className="text-base font-semibold  ">Type:</span>
    //         <p className="text-base font-normal">fire, flying</p>
    //       </div>
    //       <div>
    //         {" "}
    //         <span className="text-base font-semibold">Stats:</span>
    //         <p >
    //           hp,attack,defence, special-attack,special-defense,speed
    //         </p>
    //       </div>
    //       <div className="flex">
    //         {" "}
    //         <span className="text-base font-semibold  ">Abilities:</span>
    //         <p className="text-base font-normal">blaze,solar-power</p>
    //       </div>
    //       <div className="flex">
    //         {" "}
    //         <span className="text-base font-semibold  ">Some Moves:</span>
    //         <p className="text-base font-normal">
    //           mega-punch, fire-punch,thunder-punch,scratch,swords-dance
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
