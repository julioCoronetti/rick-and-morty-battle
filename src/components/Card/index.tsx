"use client";

interface CardProps {
  image: string;
  name: string;
  attack: number | "??";
  defense: number | "??";
  life: number | "??";
  specialAttribute: "attack" | "defense" | "life";
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
  onClick,
}: CardProps) => {
  const displayName = name === "" ? "Unknown" : name;
  const displayImage =
    image === "" ? "/assets/characters/unknown.svg" : image;

  return (
    <div
      onClick={onClick}
      className={`flex h-[300px] w-[210px] shrink-0 flex-col items-center justify-between rounded-[10px] bg-space py-4 outline-10 outline-white shadow-[0_5px_25px_#000] ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-[150px]">
          <p className="truncate text-center font-luckiest text-sm">
            {displayName}
          </p>
          <div className="mt-1 h-[2px] w-full rounded-full border border-white bg-neon" />
        </div>

        <img
          src={displayImage}
          alt={displayName}
          className="h-[150px] w-[150px] rounded-[10px] bg-white object-cover"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        {stats.map(({ label, key }) => (
          <div
            key={key}
            className="relative flex h-5 w-[120px] items-center font-luckiest text-[10px]"
          >
            <div className="z-10 flex h-full w-[31px] shrink-0 items-center justify-center rounded-lg border-2 border-white">
              {key === "attack" ? attack : key === "defense" ? defense : life}
            </div>
            <span className="z-10 w-full text-center">{label}</span>
            <div className="absolute left-2.5 h-[2px] w-[calc(100%-11px)] rounded-full bg-white" />
          </div>
        ))}
      </div>
    </div>
  );
};
