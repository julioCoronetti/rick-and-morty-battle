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
    <nav className="flex w-full items-center justify-between px-10 py-5 md:px-16">
      <div className="hidden items-center gap-12 lg:flex">
        {links.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 font-reem text-base font-semibold text-white no-underline transition-colors duration-300 hover:text-neon"
          >
            {label}
            <Icon size={18} />
          </Link>
        ))}
      </div>

      <div className="relative lg:hidden">
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
                className="flex items-center gap-3 font-reem text-base font-semibold text-white no-underline"
              >
                {label}
                <Icon size={18} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/battle"
        className="flex h-[36px] items-center rounded-md bg-neon px-6 font-luckiest text-base leading-none text-space no-underline transition-colors duration-300 hover:bg-white md:h-[48px] md:px-8 md:text-2xl"
      >
        BATALHAR
      </Link>
    </nav>
  );
};
