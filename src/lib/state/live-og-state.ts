import { create } from "zustand";

interface OgBuilder {
  tag: string;
  title: string;
  bgColor: string;
  logo: string;
  image: string;

  setTag: (tag: string) => void;
  setTitle: (title: string) => void;
  setBgColor: (color: string) => void;
  setLogo: (url: string) => void;
  setImage: (url: string) => void;
}

export const useOgBuilder = create<OgBuilder>()((set) => ({
  tag: "OG Kush",
  title: "Your Very Own Open Graph Images",
  bgColor: "bg-gray-100",
  logo: "img/logo.png",
  image: "img/screenshot.png",

  setTag(tag) {
    set({ tag: tag });
  },
  setTitle(title) {
    set({ title: title });
  },
  setBgColor(color) {
    set({ bgColor: color });
  },
  setLogo(url) {
    set({ logo: url });
  },
  setImage(url) {
    set({ image: url });
  },
}));
