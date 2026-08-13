"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Card } from "@/components/Card";
import { HomeButton } from "@/components/HomeButton";
import { useBattleHistory } from "@/contexts/BattleHistoryProvider";
import { useCharacter } from "@/contexts/CharacterProvider";
import { useUser } from "@/contexts/UserProvider";
import { Character } from "@/types/Character";

export default function Battle() {
  const { characters } = useUser();
  const router = useRouter();
  const { addBattle } = useBattleHistory();
  const { generateCharacter } = useCharacter();

  useEffect(() => {
    if (characters.length === 0) {
      router.push("/generate");
    }
  }, [characters, router]);

  const handleCardClick = async (selectedCharacter: Character) => {
    const opponent = await generateCharacter();

    const battle = {
      id: crypto.randomUUID(),
      player: selectedCharacter,
      opponent,
      result: null,
    };

    addBattle(battle);
    router.push(`/battle/start?battleId=${battle.id}`);
  };

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="font-luckiest text-[25pt]">Select your character</h2>
      <div className="character-selector flex w-[1024px] max-w-full flex-row gap-8 overflow-x-auto rounded-[10px] bg-gray-300 p-8">
        {characters.map((character: Character) => (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            attack={character.attack}
            defense={character.defense}
            life={character.life}
            specialAttribute={character.specialAttribute}
            onClick={() => handleCardClick(character)}
          />
        ))}
      </div>
      <HomeButton />
    </section>
  );
}
