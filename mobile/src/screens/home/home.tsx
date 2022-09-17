import { FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GAMES } from "../../utils/games";

import { GameCard } from "../../components/game-card";
import { Heading } from "../../components/heading";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.Image source={logoImg} />

      <Heading
        title="Encontre seu duo!"
        subTitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(game) => game.id}
        renderItem={({ item: game }) => <GameCard game={game} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
      />
    </S.Container>
  );
};

export { Home };
