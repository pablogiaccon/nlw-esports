import { ActivityIndicator } from "react-native";
import { THEME } from "../../theme";
import { Container } from "./styles";

interface Props {
  size?: number | "small" | "large";
}

const Loading = ({ size }: Props) => {
  return (
    <Container>
      <ActivityIndicator size={size} color={THEME.COLORS.PRIMARY} />
    </Container>
  );
};
export { Loading };
