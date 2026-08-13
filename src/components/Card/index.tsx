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
  { label: "Atack", key: "attack" as const },
  { label: "Defense", key: "defense" as const },
  { label: "Life", key: "life" as const },
];

export const Card = ({
  image,
  name,
  attack,
  defense,
  life,
  onClick,
}: CardProps) => {
  const displayName = name === "" ? "unknown" : name;
  const displayImage =
    image === "" ? "/assets/characters/unknown.svg" : image;

  return (
    <div
      onClick={onClick}
      className={`flex h-[310px] w-[210px] shrink-0 flex-col items-center justify-between rounded-[10px] bg-blue-800 py-4 outline-10 outline-white shadow-[0_5px_25px_#000] ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="relative w-[150px] text-base">
          <p className="max-w-full truncate whitespace-nowrap">{displayName}</p>
          <hr className="rounded-[2rem] border-2 border-white bg-white" />
        </div>

        <img
          src={displayImage}
          alt={displayName}
          className="h-[150px] w-[150px] rounded-[10px] border-2 border-white object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        {stats.map(({ label, key }) => (
          <div
            key={key}
            className="relative flex w-[100px] font-luckiest text-[0.8rem]"
          >
            <div className="-ml-[10%] flex w-[30%] justify-center rounded-lg border-2 border-white">
              {key === "attack" ? attack : key === "defense" ? defense : life}
            </div>
            <div className="flex w-[70%] justify-center">{label}</div>
            <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-tr-[2rem] rounded-br-[2rem] bg-white" />
          </div>
        ))}
      </div>
    </div>
  );
};
