import { ColorValue } from "react-native";
import { THEME } from "../../theme";

import * as S from "./styles";

interface Props {
  label: string;
  value: string;
  color?: ColorValue;
}

const DuoInfo = ({ label, value, color = THEME.COLORS.TEXT }: Props) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Value color={color} numberOfLines={1}>
        {value}
      </S.Value>
    </S.Container>
  );
};

export { DuoInfo };
