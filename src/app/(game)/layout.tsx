import { Navigation } from "@/components/Navigation";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      {children}
    </div>
  );
}
