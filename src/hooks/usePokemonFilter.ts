import { useState, useEffect } from "react";
import { IpokemonInfo } from "@/types/common";

export function usePokemonFilter(initialPokemonList:IpokemonInfo[], initialPokemonTypes:IpokemonInfo[]) {
  const [selectedPokemonType, setSelectedPokemonType] = useState<string | null>(null);
  const [filteredPokemonList, setFilteredPokemonList] = useState<IpokemonInfo[]>(initialPokemonList);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let filteredList = initialPokemonList;

    if (selectedPokemonType && selectedPokemonType !== "all") {
      filteredList = filteredList.filter(pokemon => pokemon.types.includes(selectedPokemonType));
    }

    if (query) {
      filteredList = filteredList.filter(pokemon => pokemon.name.toLowerCase().includes(query));
    }

    setFilteredPokemonList(filteredList);
  }, [initialPokemonList, query, selectedPokemonType]);

  const handleSelectChange = (value: string) => {
    setSelectedPokemonType(value === "all" ? null : value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  return {
    pokemonTypes: initialPokemonTypes,
    filteredPokemonList,
    handleSelectChange,
    handleSearchChange,
    getSelectPlaceholder: () => selectedPokemonType || "All Type Pokemon",
  };
}
