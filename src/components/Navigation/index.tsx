"use client";

import Link from "next/link";
import { useState } from "react";

import { ClockIcon, MenuIcon, PersonIcon, StarIcon } from "@/components/icons";

const links = [
  { href: "/generate", label: "Favoritos", Icon: StarIcon },
  { href: "/characters", label: "Equipe", Icon: PersonIcon },
  { href: "/history", label: "Histórico", Icon: ClockIcon },
];

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between px-8 py-4 md:px-10">
      <div className="hidden items-center gap-32 md:flex">
        {links.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-5 font-reem text-xl text-white no-underline transition-colors duration-300 hover:text-neon"
          >
            {label}
            <Icon size={21} />
          </Link>
        ))}
      </div>

      <div className="relative md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="cursor-pointer text-white"
        >
          <MenuIcon size={40} />
        </button>
        {menuOpen && (
          <div className="absolute left-0 top-14 z-50 flex flex-col gap-6 rounded-lg bg-panel p-6">
            {links.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 font-reem text-xl text-white no-underline"
              >
                {label}
                <Icon size={21} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/battle"
        className="rounded-md bg-neon px-8 py-2 font-luckiest text-2xl text-space no-underline transition-colors duration-300 hover:bg-white md:px-12 md:py-4 md:text-3xl"
      >
        BATALHAR
      </Link>
    </nav>
  );
};
