import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { api } from "../../services/api";
import { GameBanner, GameBannerResponse } from "../../types/game";

import { GameCard } from "../../components/game-card";
import { Heading } from "../../components/heading";

import * as S from "./styles";
import { Background } from "../../components/background";

const Home = () => {
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
    <Background>
      <S.Container>
        <S.Image source={logoImg} />

        <Heading
          title="Encontre seu duo!"
          subTitle="Selecione o game que deseja jogar..."
          style={{ padding: 32 }}
        />

        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item: game }) => <GameCard game={game} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
        />
      </S.Container>
    </Background>
  );
};

export { Home };
