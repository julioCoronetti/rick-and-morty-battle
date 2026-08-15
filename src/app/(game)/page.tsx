"use client";

import Image from "next/image";
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
      <section className="flex flex-col items-center px-4 pt-14 text-center md:pt-28">
        <div className="relative">
          <h1 className="font-luckiest text-3xl text-neon md:text-4xl">
            Rick and morty
          </h1>
          <h2 className="font-luckiest text-6xl leading-none text-neon drop-shadow-[0_0_8px_rgba(231,246,17,0.16)] md:text-7xl lg:text-8xl">
            BATTLE
          </h2>
          <Image
            src="/assets/weapon.svg"
            alt=""
            width={143}
            height={143}
            className="absolute -right-2 top-4 w-24 md:left-full md:-ml-14 md:right-auto md:top-5 md:w-32 lg:w-36"
          />
        </div>

        <p className="mt-10 max-w-sm font-semibold text-lg text-white md:mt-14 md:max-w-md md:text-xl">
          Entre em uma batalha de turnos com seus personagens favoritos!
        </p>

        <div className="relative mt-10 md:mt-16">
          <div className="absolute inset-0 border border-neon" />
          <button
            onClick={goToBattlePage}
            className="relative translate-x-[5px] translate-y-[5px] cursor-pointer bg-neon px-8 py-3 font-luckiest text-2xl text-space transition-colors duration-300 hover:bg-white md:px-12 md:py-4 md:text-3xl"
          >
            BATALHAR
          </button>
        </div>
      </section>

      <section className="mt-10 flex w-full items-start justify-center px-4 md:mt-20">
        <Card
          size="sm"
          className="z-[1] mt-[26px] -rotate-[15deg] sm:mt-[44px] lg:mt-[51px]"
          specialAttribute="attack"
          {...showcaseCharacters[0]}
        />
        <Card
          size="sm"
          className="z-[2] -ml-[13px] sm:-ml-[23px] lg:-ml-[26px]"
          specialAttribute="attack"
          {...showcaseCharacters[1]}
        />
        <Card
          size="sm"
          className="z-[3] -ml-[15px] mt-[24px] rotate-[10deg] sm:-ml-[26px] sm:mt-[42px] lg:-ml-[31px] lg:mt-[48px]"
          specialAttribute="attack"
          {...showcaseCharacters[2]}
        />
      </section>

      <Footer />
    </main>
  );
}
