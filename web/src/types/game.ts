export type GameBanner = {
  id: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
};

export type GameBannerResponse = {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
};

export type Game = {
  id: string;
  title: string;
  bannerUrl: string;
};
