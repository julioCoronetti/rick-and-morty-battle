"use client";

import { Card } from "@/components/Card";
import { HomeButton } from "@/components/HomeButton";
import { useUser } from "@/contexts/UserProvider";

export default function Characters() {
  const { characters } = useUser();

  return (
    <>
      <div className="flex flex-col items-center gap-8 p-8">
        <h2 className="mt-16 font-luckiest text-4xl text-neon">My Characters</h2>
        {characters.length > 0 && (
          <div className="grid grid-cols-1 gap-12 rounded-[10px] bg-panel p-8 shadow-[5px_5px_25px_#00000050] md:grid-cols-2 xl:grid-cols-3">
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
      </div>
      <HomeButton />
    </>
  );
}
