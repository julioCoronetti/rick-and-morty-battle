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
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <p>Batalha não encontrada.</p>
        <HomeButton />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h2 className="font-luckiest text-5xl">Batalha</h2>
      <div className="flex w-[90%] justify-around">
        <div className="flex flex-col items-center gap-4">
          <h3>Você</h3>
          <Card {...battle.player} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3>Oponente</h3>
          <Card {...battle.opponent} />
        </div>
      </div>
      <HomeButton />
    </div>
  );
};
