import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

import { CreateAd } from "./create-ad";
import { Input } from "./form";
import { SelectWeekDay } from "./select-week-day";

const DialogCreateAd = () => {
  return (
    <Dialog.Root>
      <CreateAd />

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg min-w-[520px] w-fit shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form action="" className="mt-8 gap-4 flex flex-col">
            <Input
              name="game"
              title="Qual o game?"
              mandatory
              placeholder="Selecione o game que deseja jogar"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            />

            <Input
              name="name"
              title="Seu nome(ou nickname)"
              mandatory
              placeholder="Como te chamam dentro do game?"
            />

            <div className="grid grid-cols-2 gap-6">
              <Input
                name="yearsPlaying"
                title="Joga há quantos anos?"
                mandatory
                placeholder="Tudo bem ser ZERO"
                type="number"
              />

              <Input
                name="discord"
                title="Joga há quantos anos?"
                mandatory
                placeholder="Usuário#0000"
              />
            </div>

            <div className="flex gap-6">
              <SelectWeekDay />

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">
                  Qual horário do dia? <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input name="hourStart" type="time" placeholder="De" />
                  <Input name="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-2 text-sm">
              <input type="checkbox" />
              Costumo me conectar ao chat de voz
            </div>

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
    </Dialog.Root>
  );
};

export { DialogCreateAd };
