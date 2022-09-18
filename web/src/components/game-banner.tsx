import { GameBanner } from "@/types/game";

interface Props {
  banner: GameBanner;
}

const GameBannerItem = ({ banner }: Props) => {
  const { id, bannerUrl, adsCount, title } = banner;
  return (
    <a href={`/game/${id}`} className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={title} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount === 1 ? `${adsCount} anúncio` : `${adsCount} anúncios`}
        </span>
      </div>
    </a>
  );
};

export { GameBannerItem };
