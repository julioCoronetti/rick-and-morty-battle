"use client";

import { BattleHistoryProvider } from "@/contexts/BattleHistoryProvider";
import { CharacterProvider } from "@/contexts/CharacterProvider";
import { UserProvider } from "@/contexts/UserProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BattleHistoryProvider>
      <UserProvider>
        <CharacterProvider>{children}</CharacterProvider>
      </UserProvider>
    </BattleHistoryProvider>
  );
}
