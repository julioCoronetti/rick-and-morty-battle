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
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <section className="flex flex-col items-center px-4 pt-20 text-center md:pt-28">
        <div className="relative">
          <h1 className="font-luckiest text-4xl text-neon">Rick and morty</h1>
          <h2 className="font-luckiest text-8xl leading-none text-neon drop-shadow-[0_0_8px_rgba(231,246,17,0.16)]">
            BATTLE
          </h2>
          <img
            src="/assets/weapon.svg"
            alt=""
            className="absolute -right-2 top-2 w-32 md:-right-10 md:w-40"
          />
        </div>

        <p className="mt-6 max-w-sm font-semibold text-xl text-white md:max-w-md">
          Entre em uma batalha de turnos com seus personagens favoritos!
        </p>

        <div className="relative mt-12 md:mt-16">
          <div className="absolute inset-0 rounded-[10px] border border-neon" />
          <button
            onClick={goToBattlePage}
            className="relative translate-x-[5px] translate-y-[5px] cursor-pointer rounded-[10px] bg-neon px-12 py-4 font-luckiest text-3xl text-space transition-colors duration-300 hover:bg-white"
          >
            BATALHAR
          </button>
        </div>
      </section>

      <section className="mt-16 w-full overflow-x-auto md:mt-20">
        <div className="mx-auto flex w-max items-start px-4">
          <Card
            className="mt-8"
            specialAttribute="attack"
            {...showcaseCharacters[0]}
          />
          <Card
            className="-ml-16"
            specialAttribute="attack"
            {...showcaseCharacters[1]}
          />
          <Card
            className="-ml-14 mt-8"
            specialAttribute="attack"
            {...showcaseCharacters[2]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
