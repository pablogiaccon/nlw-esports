import { useEffect, useState } from "react";
import { Ad, GameBannerResponse } from "@/types/game";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Controller, useForm, useWatch } from "react-hook-form";

import { api } from "@/services.api";

import { Checkbox, Input, Select } from "./form";
import { SelectWeekDay } from "./select-week-day";
import { convertHourStringToMinutes } from "@/utils/convert-hour-string-to-minutes";

const CreateAdForm = () => {
  const { control, handleSubmit } = useForm<Ad>();
  const [games, setGames] = useState<{ value: string; label: string }[]>([]);

  async function onSubmit(data: Ad) {
    try {
      const response = await api.post(`/games/${data.game}/ads`, {
        ...data,
        yearsPlaying: Number(data.yearsPlaying),
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await api.get<GameBannerResponse[]>("/games");
      const gamesFormatted = response.data.map((game) => ({
        value: game.id,
        label: game.title,
      }));

      setGames(gamesFormatted);
    })();
  }, []);

  const [hourStart, hourEnd] = useWatch({
    control,
    name: ["hourStart", "hourEnd"],
  });

  const hourStartInMinutes = convertHourStringToMinutes(hourStart);
  const hourEndInMinutes = convertHourStringToMinutes(hourEnd);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg min-w-[520px] w-fit shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 gap-4 flex flex-col"
        >
          <Controller
            name="game"
            control={control}
            rules={{
              required: "Campo obrigatório",
            }}
            render={({ field, fieldState }) => (
              <Select
                name="game"
                title="Qual o game?"
                mandatory
                placeholder="Selecione o game que deseja jogar"
                options={games}
                error={fieldState.error}
                onSelect={field.onChange}
              />
            )}
          />

          <Controller
            name="name"
            control={control}
            rules={{
              required: "Campo obrigatório",
            }}
            render={({ field, fieldState }) => (
              <Input
                title="Seu nome(ou nickname)"
                mandatory
                placeholder="Como te chamam dentro do game?"
                onChange={field.onChange}
                value={field.value}
                name={field.name}
                error={fieldState.error}
              />
            )}
          />

          <div className="grid grid-cols-2 gap-6">
            <Controller
              name="yearsPlaying"
              control={control}
              rules={{
                required: "Campo obrigatório",
                min: {
                  value: 0,
                  message: "Insira um valor válido",
                },
                max: {
                  value: 100,
                  message: "Insira um valor válido",
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  title="Joga há quantos anos?"
                  mandatory
                  placeholder="Tudo bem ser ZERO"
                  type="number"
                  onChange={field.onChange}
                  value={field.value}
                  name={field.name}
                  error={fieldState.error}
                />
              )}
            />

            <Controller
              name="discord"
              control={control}
              rules={{
                required: "Campo obrigatório",
                validate: (val) =>
                  /.*[^# ]#[0-9]{4}/i.test(val) || "Informe um ID válido",
              }}
              render={({ field, fieldState }) => (
                <Input
                  title="Qual seu Discord?"
                  mandatory
                  placeholder="Usuário#0000"
                  onChange={field.onChange}
                  value={field.value}
                  name={field.name}
                  error={fieldState.error}
                />
              )}
            />
          </div>

          <div className="flex gap-6">
            <Controller
              name="weekDays"
              control={control}
              rules={{
                required: "Selecione ao menos 1 dia",
              }}
              render={({ field, fieldState }) => (
                <SelectWeekDay
                  value={field.value}
                  onSelect={field.onChange}
                  error={fieldState.error}
                />
              )}
            />

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">
                Qual horário do dia? <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Controller
                  name="hourStart"
                  control={control}
                  rules={{
                    required: "Campo obrigatório",
                    deps: "hourEnd",
                    validate: (val) =>
                      convertHourStringToMinutes(val) < hourEndInMinutes ||
                      "Horário de início deve ser antes do horário do fim",
                  }}
                  render={({ field, fieldState }) => (
                    <Input
                      type="time"
                      placeholder="De"
                      onChange={field.onChange}
                      value={field.value}
                      name={field.name}
                      error={fieldState.error}
                    />
                  )}
                />
                <Controller
                  name="hourEnd"
                  control={control}
                  rules={{
                    required: "Campo obrigatório",
                    deps: "hourStart",
                    validate: (val) =>
                      convertHourStringToMinutes(val) > hourStartInMinutes ||
                      "Horário de início deve ser antes do horário do fim",
                  }}
                  render={({ field, fieldState }) => (
                    <Input
                      type="time"
                      placeholder="Até"
                      onChange={field.onChange}
                      value={field.value}
                      name={field.name}
                      error={fieldState.error}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <Controller
            name="useVoiceChannel"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="Costumo me conectar ao chat de voz"
                onCheck={field.onChange}
              />
            )}
          />

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600"
            >
              <GameController className="w-6 h-6" /> Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export { CreateAdForm };
