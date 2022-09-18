import { useEffect, useState } from "react";
import { api } from "@/services.api";
import { GameBanner, GameBannerResponse } from "@/types/game";

import { GameBannerItem } from "./game-banner";

const GameList = () => {
  const [games, setGames] = useState<GameBanner[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<GameBannerResponse[]>("/games");
      const gamesFormatted = response.data.map((game) => ({
        ...game,
        adsCount: game._count.ads,
      }));

      setGames(gamesFormatted);
    })();
  }, []);

  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      {games.map((game) => (
        <GameBannerItem key={game.id} banner={game} />
      ))}
    </div>
  );
};

export { GameList };
