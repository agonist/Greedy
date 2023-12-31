import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type Props = {
  tag: string;
  title: string;
  logo: string;
  banner: string;
  bgColor: string;
  fwref: (domNode: HTMLDivElement) => void;
};

export const ImagePreview: React.FC<Props> = ({
  tag,
  title,
  logo,
  banner,
  bgColor,
  fwref,
}) => {
  return (
    <Card className="w-full h-fit p-4">
      <div
        ref={fwref}
        className={cn("flex w-[600px] h-[315px] pl-4 pt-4 space-x-4", bgColor)}
      >
        <div className="flex flex-col w-1/2">
          <img
            src={logo}
            alt="Selected Logo"
            width={40}
            height={40}
            className="rounded-md"
          />

          <p className="border rounded-xl w-fit px-2 text-black mt-8">{tag}</p>
          <p className="text-3xl text-black mt-4">{title}</p>
        </div>
        <div className="flex relative w-1/2  h-full overflow-hidden">
          <div className="w-full h-full">
            <div
              style={{
                position: "absolute",
                top: 40,
                left: 0,
                width: "200%",
                height: "100%",
                clipPath: "inset(0 50% 0 0)",
              }}
            >
              <img
                src={banner}
                alt="Selected Logo"
                width={"100%"}
                height={"100%"}
                className=" rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
