import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

const Image = styled.Image`
  width: 214px;
  height: 120px;
  margin: 74px 0 48px;
`;

export { Container, Image };
