import { create } from "zustand";

interface OgBuilder {
  tag: string;
  title: string;
  bgColor: string;
  logo: string;
  image: string;
  gradientDirection: string;
  font: string;

  setTag: (tag: string) => void;
  setTitle: (title: string) => void;
  setBgColor: (color: string) => void;
  setLogo: (url: string) => void;
  setImage: (url: string) => void;
  setGradientDirection: (direction: string) => void;
  setFont: (font: string) => void;
}

export const useOgBuilder = create<OgBuilder>()((set) => ({
  tag: "OG Kush",
  title: "Your Very Own Open Graph Images",
  bgColor: "from-pink-300 via-purple-300 to-indigo-400",
  logo: "img/logo.png",
  image: "img/screenshot.png",
  gradientDirection: "bg-gradient-to-t",
  font: "inter",

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
  setGradientDirection(direction) {
    set({ gradientDirection: direction });
  },
  setFont(font) {
    set({ font: font });
  },
}));
