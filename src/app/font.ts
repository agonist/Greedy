import { Inter, Roboto_Mono, Open_Sans, Noto_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  preload: true,
  variable: "--font-opensans",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  preload: true,
  variable: "--font-notosans",
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  preload: true,
  variable: "--font-robotomono",
});
