import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";

import { api } from "../../services/api";
import { GameRouteParams } from "../../@types/navigation";
import { Ad } from "../../types/game";
import { THEME } from "../../theme";

import { Background } from "../../components/background";
import { Heading } from "../../components/heading";
import { DuoCard } from "../../components/duo-card";

import * as S from "./styles";

const Game = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const game = route.params as GameRouteParams;

  const [ads, setAds] = useState<Ad[]>();

  useEffect(() => {
    (async () => {
      const response = await api.get<Ad[]>(`/games/${game.id}/ads`);

      setAds(response.data);
    })();
  }, [game.id]);

  return (
    <Background>
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={goBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <S.Logo source={logoImg} />

          <S.Right />
        </S.Header>

        <S.Cover source={{ uri: game.bannerUrl }} resizeMode="cover" />

        <Heading title={game.title} subTitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={ads}
          keyExtractor={(ad) => ad.id}
          renderItem={({ item: ad }) => <DuoCard ad={ad} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            ads?.length
              ? {
                  paddingLeft: 32,
                  paddingRight: 64,
                  alignItems: "flex-start",
                }
              : {
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
          style={{ width: "100%" }}
          ListEmptyComponent={() => (
            <S.EmptyListText>Não há anúncios publicados ainda.</S.EmptyListText>
          )}
        />
      </S.Container>
    </Background>
  );
};

export { Game };
