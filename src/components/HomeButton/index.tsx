"use client";

import { useRouter } from "next/navigation";

import { HouseIcon } from "@/components/icons";

export const HomeButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed bottom-[3vh] right-[2vw] flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-none bg-yellow shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:-translate-y-[5px]"
    >
      <HouseIcon size={30} />
    </button>
  );
};
