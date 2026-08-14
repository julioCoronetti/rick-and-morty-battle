"use client";

import { Card } from "@/components/Card";
import { HomeButton } from "@/components/HomeButton";
import { useUser } from "@/contexts/UserProvider";

export default function Characters() {
  const { characters } = useUser();

  return (
    <>
      <div className="flex w-full flex-col items-center gap-8 px-4 py-8">
        <h2 className="font-luckiest text-4xl text-neon">Meus Personagens</h2>
        {characters.length > 0 && (
          <div className="grid grid-cols-1 gap-10 rounded-[10px] bg-panel p-8 shadow-[5px_5px_25px_#00000050] md:grid-cols-2 xl:grid-cols-3">
            {characters.map((character) => (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                attack={character.attack}
                defense={character.defense}
                life={character.life}
                specialAttribute={character.specialAttribute}
              />
            ))}
          </div>
        )}
        {characters.length === 0 && (
          <p className="font-reem text-xl text-white">
            Nenhum personagem gerado ainda.
          </p>
        )}
      </div>
      <HomeButton />
    </>
  );
}
