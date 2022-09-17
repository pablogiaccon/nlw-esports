import { ViewProps } from "react-native";

import * as S from "./styles";

interface Props extends ViewProps {
  title: string;
  subTitle: string;
}

const Heading = ({ title, subTitle, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
};

export { Heading };
