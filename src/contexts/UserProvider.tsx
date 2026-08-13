import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { Character } from "@/types/Character";

type UserContextType = {
  characters: Character[];
  generationKey: number;
  addCharacter: (char: Character) => void;
  consumeKey: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [generationKey, setGenerationKey] = useState<number>(0);

  useEffect(() => {
    const storedCharacters = JSON.parse(
      localStorage.getItem("myCharacters") || "[]",
    );
    const storedKey = parseInt(localStorage.getItem("generationKey") || "0");

    if (storedCharacters.length === 0 && storedKey === 0) {
      localStorage.setItem("generationKey", "1");
      setGenerationKey(1);
    } else {
      setCharacters(storedCharacters);
      setGenerationKey(storedKey);
    }
  }, []);

  const addCharacter = (char: Character) => {
    const updated = [...characters, char];
    setCharacters(updated);
    localStorage.setItem("myCharacters", JSON.stringify(updated));
  };

  const consumeKey = () => {
    const updated = generationKey - 1;
    setGenerationKey(updated);
    localStorage.setItem("generationKey", String(updated));
  };

  return (
    <UserContext.Provider
      value={{ characters, generationKey, addCharacter, consumeKey }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser precisa estar dentro do UserProvider");
  return context;
};
