import type { Metadata } from "next";
import { Luckiest_Guy, Reem_Kufi_Fun } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
});

const reemKufiFun = Reem_Kufi_Fun({
  subsets: ["latin"],
  variable: "--font-reem-kufi",
});

export const metadata: Metadata = {
  title: "Rick And Morty Battle",
  description: "Enter a turn-based battle with your favorite characters!",
  icons: { icon: "/assets/weapon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} ${reemKufiFun.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
