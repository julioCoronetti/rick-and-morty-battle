"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ClockIcon, FlaskIcon, PersonIcon } from "@/components/icons";

const links = [
  { href: "/generate", label: "Generate", Icon: FlaskIcon },
  { href: "/characters", label: "Characters", Icon: PersonIcon },
  { href: "/history", label: "History", Icon: ClockIcon },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-4 z-[999] flex h-[10vh] -translate-x-1/2 flex-col justify-center rounded-2xl transition-all duration-500 ${
        scrolled
          ? "w-[90%] bg-panel px-4 shadow-[5px_5px_5px_#00000050]"
          : "w-full bg-transparent px-12"
      }`}
    >
      <ul className="flex list-none justify-between">
        <li className="flex gap-20">
          {links.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-4 font-reem text-white no-underline transition-colors duration-300 hover:text-neon hover:[text-shadow:0_0_10px_var(--color-neon)]"
            >
              {label} <Icon size={20} />
            </Link>
          ))}
        </li>

        <li>
          <Link
            href="/battle"
            className="rounded-lg bg-neon px-8 py-2 font-luckiest text-space no-underline"
          >
            BATTLE
          </Link>
        </li>
      </ul>
    </nav>
  );
};
