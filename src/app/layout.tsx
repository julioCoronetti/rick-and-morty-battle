import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Rick and Morty Battle',
  description: "Enter a turn-based battle with your favorite characters!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}