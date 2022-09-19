import { useState } from "react";
import { Alert, Modal, ModalProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from "expo-clipboard";

import { THEME } from "../../theme";

import { Heading } from "../heading";
import { Loading } from "../loading";

import * as S from "./styles";

interface Props extends ModalProps {
  discord: string;
  onClose(): void;
}

const DuoMatch = ({ discord, onClose, ...rest }: Props) => {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscord() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert("Usuário copiado!", "Usuário copiado com sucesso.");
    setIsCopping(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <S.Overlay onPress={onClose} />

      <S.Container>
        <S.CloseIcon onPress={onClose}>
          <MaterialIcons
            name="close"
            size={20}
            color={THEME.COLORS.CAPTION_500}
          />
        </S.CloseIcon>

        <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

        <Heading
          title="Let's play!"
          subTitle="Agora é só começar a jogar!"
          style={{ alignItems: "center", marginTop: 24 }}
        />

        <S.Text>Adicione no Discord</S.Text>

        <S.DiscordButton disabled={isCopping} onPress={handleCopyDiscord}>
          {isCopping ? (
            <Loading size="small" />
          ) : (
            <S.DiscordText numberOfLines={1}>{discord}</S.DiscordText>
          )}
        </S.DiscordButton>
      </S.Container>
    </Modal>
  );
};

export { DuoMatch };
