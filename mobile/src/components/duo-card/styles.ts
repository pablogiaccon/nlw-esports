import { THEME } from "./../../theme/index";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;

  width: 180px;
  background-color: ${THEME.COLORS.SHAPE};
  border-radius: 8px;
  padding: 20px;
  margin-right: 16px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${THEME.COLORS.PRIMARY};
`;

const LabelButton = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
  margin-left: 8px;
`;

export { Container, Button, LabelButton };
