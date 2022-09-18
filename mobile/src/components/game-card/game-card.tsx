import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { THEME } from "../../theme";
import { GameBanner } from "../../types/game";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  game: GameBanner;
}

const GameCard = ({ game, ...rest }: Props) => {
  const { navigate } = useNavigation();
  const { title, adsCount, bannerUrl, id } = game;

  function handleOpenGame() {
    navigate("game", { bannerUrl, id, title });
  }

  return (
    <S.Container onPress={handleOpenGame} {...rest}>
      <S.Cover source={{ uri: bannerUrl }}>
        <S.Footer colors={THEME.COLORS.FOOTER}>
          <S.Name>{title}</S.Name>

          <S.Ads>
            {adsCount === 1 ? `${adsCount} anúncio` : `${adsCount} anúncios`}
          </S.Ads>
        </S.Footer>
      </S.Cover>
    </S.Container>
  );
};

export { GameCard };
