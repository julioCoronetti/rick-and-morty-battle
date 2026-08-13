import { Character } from "@/types/Character";

export const getRandomCharacter = async (): Promise<Character> => {
  const randomId = Math.floor(Math.random() * 826) + 1;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`,
  );
  return response.json();
};
