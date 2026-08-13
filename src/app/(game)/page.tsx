"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { useUser } from "@/contexts/UserProvider";

const showcaseCharacters = [
  {
    image: "/assets/characters/summer.webp",
    name: "Summer Smith",
    attack: 13,
    defense: 25,
    life: 16,
  },
  {
    image: "/assets/characters/rick.png",
    name: "Rick Sanchez",
    attack: 26,
    defense: 12,
    life: 11,
  },
  {
    image: "/assets/characters/morty.webp",
    name: "Morty Smith",
    attack: 11,
    defense: 15,
    life: 27,
  },
];

export default function Home() {
  const router = useRouter();
  const { characters } = useUser();

  const goToBattlePage = () => {
    if (characters.length > 0) {
      router.push("/battle");
    } else {
      router.push("/generate");
    }
  };

  return (
    <main
      className="flex w-full flex-col items-center justify-between gap-20"
      style={{ height: "250vh" }}
    >
      <div className="mt-[20vh] flex flex-col items-center">
        <img src="/assets/logo.svg" alt="Rick and Morty Battle" />
        <p className="text-lg">Enter a turn-based battle with your favorite characters!</p>
        <button
          onClick={goToBattlePage}
          className="mt-20 cursor-pointer rounded-[10px] border-2 border-transparent bg-yellow px-8 py-2 font-luckiest text-2xl text-blue-800 outline-1 outline-white transition-colors duration-300 hover:bg-white"
          style={{ backgroundClip: "padding-box" }}
        >
          BATTLE
        </button>
      </div>

      <section className="flex gap-1.5 [&>div:nth-child(1)]:mt-10 [&>div:nth-child(1)]:-rotate-15 [&>div:nth-child(1)]:z-[1] [&>div:nth-child(2)]:-mx-8 [&>div:nth-child(2)]:z-[2] [&>div:nth-child(3)]:mt-8 [&>div:nth-child(3)]:rotate-10 [&>div:nth-child(3)]:z-[3]">
        {showcaseCharacters.map((character) => (
          <Card key={character.name} specialAttribute="attack" {...character} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
