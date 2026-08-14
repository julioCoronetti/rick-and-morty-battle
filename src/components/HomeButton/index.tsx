"use client";

import { useRouter } from "next/navigation";

import { HouseIcon } from "@/components/icons";

export const HomeButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed bottom-6 right-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border-none bg-neon shadow-[5px_5px_5px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:-translate-y-1"
    >
      <HouseIcon size={30} />
    </button>
  );
};
