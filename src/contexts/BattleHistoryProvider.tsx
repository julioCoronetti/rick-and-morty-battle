import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { Character } from "@/types/Character";

type Battle = {
  id: string;
  player: Character;
  opponent: Character;
  result: "win" | "lose" | "draw" | null;
};

type BattleHistoryContextType = {
  history: Battle[];
  addBattle: (battle: Battle) => void;
  updateBattleResult: (id: string, result: "win" | "lose" | "draw") => void;
};

const BattleHistoryContext = createContext<BattleHistoryContextType>({
  history: [],
  addBattle: () => {},
  updateBattleResult: () => {},
});

type Props = {
  children: ReactNode;
};

export const BattleHistoryProvider = ({ children }: Props) => {
  const [history, setHistory] = useState<Battle[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("battleHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("battleHistory", JSON.stringify(history));
  }, [history]);

  const addBattle = (battle: Battle) => setHistory((prev) => [...prev, battle]);
  const updateBattleResult = (id: string, result: "win" | "lose" | "draw") => {
    setHistory((prev) => prev.map((b) => (b.id === id ? { ...b, result } : b)));
  };

  return (
    <BattleHistoryContext.Provider
      value={{ history, addBattle, updateBattleResult }}
    >
      {children}
    </BattleHistoryContext.Provider>
  );
};

export const useBattleHistory = () => useContext(BattleHistoryContext);
