"use client";

import { useSearchParams } from "next/navigation";

import { Card } from "@/components/Card";
import { HomeButton } from "@/components/HomeButton";
import { useBattleHistory } from "@/contexts/BattleHistoryProvider";

export const StartBattle = () => {
  const searchParams = useSearchParams();
  const { history } = useBattleHistory();

  const battleId = searchParams.get("battleId");
  const battle = history.find((b) => b.id === battleId);

  if (!battle) {
    return (
      <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-4 py-8">
        <p className="font-reem text-xl text-white">Batalha não encontrada.</p>
        <HomeButton />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 py-8">
      <h2 className="font-luckiest text-4xl text-neon md:text-5xl">Batalha</h2>
      <div className="flex w-full max-w-4xl flex-col items-center justify-around gap-8 px-4 md:flex-row">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-reem text-xl text-white">Você</h3>
          <Card {...battle.player} specialAttribute="attack" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-reem text-xl text-white">Oponente</h3>
          <Card {...battle.opponent} specialAttribute="attack" />
        </div>
      </div>
      <HomeButton />
    </div>
  );
};
