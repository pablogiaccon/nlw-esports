import { Root as DialogRoot } from "@radix-ui/react-dialog";

import logo from "@/assets/logo-nlw-esports.svg";

import { GameList } from "@/components/game-list";
import { CreateAd } from "@/components/create-ad";
import { CreateAdForm } from "@/components/create-ad-form";

const Home = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 px-5">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <GameList />

      <DialogRoot>
        <CreateAd />
        <CreateAdForm />
      </DialogRoot>
    </div>
  );
};

export { Home };
