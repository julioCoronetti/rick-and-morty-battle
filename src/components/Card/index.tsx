"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  attack: number | "??";
  defense: number | "??";
  life: number | "??";
  specialAttribute: "attack" | "defense" | "life";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
}

const stats = [
  { label: "vida", key: "life" as const },
  { label: "Attack", key: "attack" as const },
  { label: "defense", key: "defense" as const },
];

export const Card = ({
  image,
  name,
  attack,
  defense,
  life,
  size = "md",
  className = "",
  onClick,
}: CardProps) => {
  const displayName = name === "" ? "Unknown" : name;
  const displayImage =
    image === "" ? "/assets/characters/unknown.svg" : image;

  const sizes =
    size === "sm"
      ? {
          card: "h-[150px] w-[105px] outline-[5px] py-2 sm:h-[260px] sm:w-[180px] sm:outline-8 sm:py-3 lg:h-[300px] lg:w-[210px] lg:outline-10 lg:py-4",
          name: "w-[85px] text-[9px] sm:w-[130px] sm:text-xs lg:w-[150px] lg:text-sm",
          image: "h-[75px] w-[75px] sm:h-[130px] sm:w-[130px] lg:h-[150px] lg:w-[150px]",
          stats: "w-[63px] gap-1 sm:w-[105px] sm:gap-2 lg:w-[120px] lg:gap-2.5",
          statRow: "h-3 text-[6px] sm:h-4 sm:text-[8px] lg:h-5 lg:text-[10px]",
          statBox: "w-[16px] border sm:w-[26px] sm:border-2 lg:w-[31px]",
          statBar:
            "left-1 w-[calc(100%-5px)] sm:left-2 sm:w-[calc(100%-9px)] lg:left-2.5 lg:w-[calc(100%-11px)]",
        }
      : {
          card: "h-[300px] w-[210px] outline-10 py-4",
          name: "w-[150px] text-sm",
          image: "h-[150px] w-[150px]",
          stats: "w-[120px] gap-2.5",
          statRow: "h-5 text-[10px]",
          statBox: "w-[31px] border-2",
          statBar: "left-2.5 w-[calc(100%-11px)]",
        };

  return (
    <div
      onClick={onClick}
      className={`flex ${sizes.card} shrink-0 flex-col items-center justify-between rounded-[10px] bg-space outline-white shadow-[0_5px_25px_#000] ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={sizes.name}>
          <p className="truncate text-center font-luckiest">{displayName}</p>
          <div className="mt-1 h-[2px] w-full rounded-full border border-white bg-neon" />
        </div>

        <Image
          src={displayImage}
          alt={displayName}
          width={150}
          height={150}
          className={`${sizes.image} rounded-[10px] bg-white object-cover`}
        />
      </div>

      <div className={`flex flex-col ${sizes.stats}`}>
        {stats.map(({ label, key }) => (
          <div
            key={key}
            className={`relative flex ${sizes.statRow} items-center font-luckiest`}
          >
            <div
              className={`z-10 flex ${sizes.statBox} h-full shrink-0 items-center justify-center rounded-lg border-white`}
            >
              {key === "attack" ? attack : key === "defense" ? defense : life}
            </div>
            <span className="z-10 w-full text-center">{label}</span>
            <div
              className={`absolute ${sizes.statBar} h-[2px] rounded-full bg-white`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
