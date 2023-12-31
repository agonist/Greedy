import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { IcImage } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const items = [
    {
      title: "OG Kush",
      description: (
        <span className="text-sm">Build beautiful Open Graph images.</span>
      ),
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IcImage className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="container">
      <div className="flex flex-col mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Free & Open-Source Tools
          <br /> To Help With The Annoying Stuff
        </h1>
        <h2 className="text-xl text-muted-foreground font-semibold tracking-tight">
          Because you don't always want to pay for another SaaS.
        </h2>

        <BentoGrid className=" md:auto-rows-[20rem] mt-16">
          {items.map((item, i) => (
            <Link href={"/free-og-image-builder"}>
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn("[&>p:text-lg]", item.className)}
                icon={item.icon}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-500"></div>
);
