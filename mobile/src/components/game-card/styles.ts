import { THEME } from "./../../theme/index";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  margin-right: 24px;
`;

const Cover = styled.ImageBackground`
  justify-content: flex-end;
  width: 240px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
`;

const Footer = styled(LinearGradient)`
  justify-content: flex-end;
  width: 100%;
  height: 120px;
  padding: 16px;
`;

const Name = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

const Ads = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export { Container, Cover, Footer, Name, Ads };
