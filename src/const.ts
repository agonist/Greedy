// we do that because changing dynimacly the tailwind string with variable does not work
export type Color = {
  txt: string;
  bg: string;
};

export const backgroundColors = [
  "bg-[#000000]",
  "bg-[#ffffff]",
  "bg-[#e55b5b]",
  "bg-[#e5715b]",
  "bg-[#e5875b]",
  "bg-[#e59d5b]",
  "bg-[#e5b25b]",
  "bg-[#e5c85b]",
  "bg-[#e5de5b]",
  "bg-[#d7e55b]",
  "bg-[#c1e55b]",
  "bg-[#abe55b]",
  "bg-[#95e55b]",
  "bg-[#80e55b]",
  "bg-[#6ae55b]",
  "bg-[#5be563]",
  "bg-[#5be578]",
  "bg-[#5be58e]",
  "bg-[#5be5a4]",
  "bg-[#5be5ba]",
  "bg-[#5be5cf]",
  "bg-[#5be5e5]",
  "bg-[#5bcfe5]",
  "bg-[#5bbae5]",
  "bg-[#5ba4e5]",
  "bg-[#5b8ee5]",
  "bg-[#5b78e5]",
  "bg-[#5b63e5]",
  "bg-[#6a5be5]",
  "bg-[#805be5]",
  "bg-[#955be5]",
  "bg-[#ab5be5]",
  "bg-[#c15be5]",
  "bg-[#d75be5]",
  "bg-[#e55bde]",
  "bg-[#e55bc8]",
  "bg-[#e55bb2]",
  "bg-[#e55b9d]",
  "bg-[#e55b87]",
  "bg-[#e55b71]",
];

export const textColors: Color[] = [
  { txt: "text-black", bg: "bg-black" },
  { txt: "text-neutral-800", bg: "bg-neutral-800" },
  { txt: "text-neutral-700", bg: "bg-neutral-700" },
  { txt: "text-neutral-600", bg: "bg-neutral-600" },
  { txt: "text-neutral-500", bg: "bg-neutral-500" },
  { txt: "text-neutral-300", bg: "bg-neutral-300" },
  { txt: "text-white", bg: "bg-white" },
];
