import { MagnifyingGlassPlus } from "phosphor-react";

import logo from "@/assets/logo-nlw-esports.svg";
import { GameList } from "@/components/game-list";
import { DialogCreateAd } from "@/components/dialog-create-ad";

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

      <DialogCreateAd />
    </div>
  );
};

export { Home };
