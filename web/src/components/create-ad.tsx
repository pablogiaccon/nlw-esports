import { MagnifyingGlassPlus } from "phosphor-react";
import { Trigger } from "@radix-ui/react-dialog";

const CreateAd = () => {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Trigger
          type="button"
          className="py-3 px-4 bg-violet-400 text-white rounded hover:bg-violet-600 flex items-center gap-3"
        >
          <MagnifyingGlassPlus size={20} weight="bold" />
          Publicar anúncio
        </Trigger>
      </div>
    </div>
  );
};

export { CreateAd };
