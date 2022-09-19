import styled from "styled-components/native";
import { THEME } from "../../theme";

const Container = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.LG};
  font-family: ${THEME.FONT_FAMILY.BLACK};
`;

const SubTitle = styled.Text`
  color: ${THEME.COLORS.CAPTION_400};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export { Container, Title, SubTitle };
