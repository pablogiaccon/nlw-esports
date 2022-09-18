import { TouchableOpacity } from "react-native";
import { GameController } from "phosphor-react-native";
import { THEME } from "../../theme";
import { Ad } from "../../types/game";

import { DuoInfo } from "../duo-info";

import * as S from "./styles";

interface Props {
  ad: Ad;
}

const DuoCard = ({ ad }: Props) => {
  const { name, yearsPlaying, useVoiceChannel, hourStart, hourEnd, weekDays } =
    ad;
  const yearsPlayingFormatted =
    yearsPlaying === 1 ? `${yearsPlaying} ano` : `${yearsPlaying} anos`;

  const weekDaysFormatted =
    weekDays.length === 1
      ? `${weekDays.length} dia`
      : `${weekDays.length} dias`;
  const availability = `${weekDaysFormatted} \u2022 ${hourStart}hs - ${hourEnd}hs `;

  function onConnect() {}

  return (
    <S.Container>
      <DuoInfo label="Nome" value={name} />
      <DuoInfo label="Tempo de jogo" value={yearsPlayingFormatted} />
      <DuoInfo label="Disponibilidade" value={availability} />
      <DuoInfo
        label="Chamada de áudio?"
        value={useVoiceChannel ? "Sim" : "Não"}
        color={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <S.Button onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <S.LabelButton>Conectar</S.LabelButton>
      </S.Button>
    </S.Container>
  );
};

export { DuoCard };
