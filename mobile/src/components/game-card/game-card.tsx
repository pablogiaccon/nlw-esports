import { TouchableOpacityProps } from "react-native";

import { THEME } from "../../theme";
import { Game } from "../../utils/games";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  game: Game;
}

const GameCard = ({ game, ...rest }: Props) => {
  const { name, ads, cover } = game;
  return (
    <S.Container {...rest}>
      <S.Cover source={cover}>
        <S.Footer colors={THEME.COLORS.FOOTER}>
          <S.Name>{name}</S.Name>

          <S.Ads>{ads === 1 ? `${ads} anúncio` : `${ads} anúncios`}</S.Ads>
        </S.Footer>
      </S.Cover>
    </S.Container>
  );
};

export { GameCard };
