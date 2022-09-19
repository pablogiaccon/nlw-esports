import { GameController } from "phosphor-react-native";
import { THEME } from "../../theme";
import { Ad } from "../../types/game";

import { DuoInfo } from "../duo-info";

import * as S from "./styles";
import { DuoMatch } from "../duo-match";
import { useState } from "react";
import { api } from "../../services/api";

interface Props {
  ad: Ad;
}

const DuoCard = ({ ad }: Props) => {
  const [discord, setDiscord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    name,
    yearsPlaying,
    useVoiceChannel,
    hourStart,
    hourEnd,
    weekDays,
  } = ad;
  const yearsPlayingFormatted =
    yearsPlaying === 1 ? `${yearsPlaying} ano` : `${yearsPlaying} anos`;

  const weekDaysFormatted =
    weekDays.length === 1
      ? `${weekDays.length} dia`
      : `${weekDays.length} dias`;
  const availability = `${weekDaysFormatted} \u2022 ${hourStart}hs - ${hourEnd}hs `;

  async function onConnect() {
    try {
      const response = await api.get<{ discord: string }>(`ads/${id}/discord`);
      setDiscord(response.data.discord);
      setShowModal(true);
    } catch (err) {}
  }

  return (
    <>
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

      <DuoMatch
        visible={showModal}
        onClose={() => setShowModal(false)}
        discord={discord || ""}
      />
    </>
  );
};

export { DuoCard };
