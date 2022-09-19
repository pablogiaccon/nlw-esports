import styled from "styled-components/native";
import { THEME } from "../../theme";

const Overlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${THEME.COLORS.OVERLAY};
`;

const Container = styled.View`
  margin: auto;
  align-items: center;
  justify-content: center;

  width: 311px;
  background-color: ${THEME.COLORS.SHAPE};
  border-radius: 8px;
  padding: 0 0 16px 16px;
`;

const CloseIcon = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 8px;
`;

const Text = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
  margin: 24px 0 8px;
`;

const DiscordButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 231px;
  height: 48px;
  background-color: ${THEME.COLORS.BACKGROUND_900};
  border-radius: 4px;
  margin-bottom: 16px;
`;

const DiscordText = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export { Overlay, Container, CloseIcon, Text, DiscordButton, DiscordText };
