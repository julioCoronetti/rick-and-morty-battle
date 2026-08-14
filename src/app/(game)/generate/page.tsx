"use client";

import { Card } from "@/components/Card";
import { HomeButton } from "@/components/HomeButton";
import { useCharacter } from "@/contexts/CharacterProvider";
import { useUser } from "@/contexts/UserProvider";

export default function Generate() {
  const { userCharacter, setUserCharacter, generateCharacter } = useCharacter();
  const { generationKey, consumeKey, addCharacter } = useUser();

  const handleGenerate = async () => {
    if (generationKey > 0) {
      const newCharacter = await generateCharacter();
      setUserCharacter(newCharacter);
      addCharacter(newCharacter);
      setUserCharacter(newCharacter);
      consumeKey();
    } else {
      alert("Você não tem chaves suficientes para gerar um personagem!");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <Card
        image={userCharacter?.image || ""}
        name={userCharacter?.name || ""}
        attack={userCharacter?.attack === 0 ? "??" : (userCharacter?.attack ?? "??")}
        defense={
          userCharacter?.defense === 0 ? "??" : (userCharacter?.defense ?? "??")
        }
        life={userCharacter?.life === 0 ? "??" : (userCharacter?.life ?? "??")}
        specialAttribute={userCharacter?.specialAttribute || "attack"}
      />
      <button
        onClick={handleGenerate}
        className="cursor-pointer rounded-lg border-0 bg-neon px-10 py-3 font-luckiest text-xl text-space shadow-[0_0_15px_var(--color-neon)] transition-transform duration-300 hover:-translate-y-1"
      >
        Gerar
      </button>
      <HomeButton />
    </div>
  );
}
