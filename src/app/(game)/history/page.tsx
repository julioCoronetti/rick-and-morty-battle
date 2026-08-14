"use client";

import { HomeButton } from "@/components/HomeButton";
import { useBattleHistory } from "@/contexts/BattleHistoryProvider";

export default function History() {
  const { history } = useBattleHistory();

  return (
    <>
      <div className="flex min-h-dvh w-full flex-col items-center gap-8 px-4 py-8">
        <h2 className="font-luckiest text-4xl text-neon">Histórico</h2>
        {history.length === 0 && (
          <p className="font-reem text-xl text-white">
            Nenhuma batalha registrada ainda.
          </p>
        )}
      </div>
      <HomeButton />
    </>
  );
}
