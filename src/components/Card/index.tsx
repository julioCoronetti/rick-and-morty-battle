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
          card: "h-[180px] w-[125px] outline-[6px] py-2 sm:h-[300px] sm:w-[210px] sm:outline-10 sm:py-4",
          name: "w-[95px] text-[10px] sm:w-[150px] sm:text-sm",
          image: "h-[90px] w-[90px] sm:h-[150px] sm:w-[150px]",
          stats: "w-[75px] gap-1.5 sm:w-[120px] sm:gap-2.5",
          statRow: "h-3 text-[7px] sm:h-5 sm:text-[10px]",
          statBox: "w-[19px] border sm:w-[31px] sm:border-2",
          statBar: "left-1.5 w-[calc(100%-7px)] sm:left-2.5 sm:w-[calc(100%-11px)]",
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
