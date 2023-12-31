import { Metadata } from "next";
import { FreeOgImageBuilder } from "./page-client";

export const metadata: Metadata = {
  title: "OG Kush - Free Open Graph Images Generator by Greedy",
  description:
    "Generate beautiful Open Graph Images with OG Kush, a tools to help you with something you really don't want to lose time with.",
};

export default function Page() {
  return <FreeOgImageBuilder />;
}
