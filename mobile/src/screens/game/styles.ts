import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { THEME } from "../../theme";

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 32px;
  margin-top: 28px;
`;

const Logo = styled.Image`
  width: 72px;
  height: 40px;
`;

const Right = styled.View`
  width: 20px;
  height: 20px;
`;

const Cover = styled.Image`
  width: 311px;
  height: 160px;
  border-radius: 8px;
  margin-top: 32px;
`;

const EmptyListText = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export { Container, Header, Logo, Right, Cover, EmptyListText };
