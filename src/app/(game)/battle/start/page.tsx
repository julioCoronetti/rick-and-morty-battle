import { Suspense } from "react";

import { StartBattle } from "./start-battle";

export default function BattleStartPage() {
  return (
    <Suspense fallback={null}>
      <StartBattle />
    </Suspense>
  );
}
