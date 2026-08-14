import { Navigation } from "@/components/Navigation";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center">
      <Navigation />
      {children}
    </div>
  );
}
