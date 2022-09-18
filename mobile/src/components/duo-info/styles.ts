import { ColorValue } from "react-native";
import styled from "styled-components/native";
import { THEME } from "../../theme";

const Container = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  margin-bottom: 4px;
`;

const Value = styled.Text<{ color: string }>`
  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.BOLD};
  color: ${(props) => props.color};
`;

export { Container, Label, Value };
