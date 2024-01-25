import {
  BackgroundProperty,
  ImageProperty,
  Template,
  TextProperty,
} from "@/types/template";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type Props = {
  template: Template;
  fwref: (domNode: HTMLDivElement) => void;
};

export const FirstPreview: React.FC<Props> = ({ template, fwref }) => {
  const background = template.properties.find(
    (p) => p.name === "background"
  ) as BackgroundProperty;

  const image = template.properties.find(
    (p) => p.name === "image"
  ) as ImageProperty;

  const logo = template.properties.find(
    (p) => p.name === "logo"
  ) as ImageProperty;

  const tag = template.properties.find((p) => p.name === "tag") as TextProperty;

  const title = template.properties.find(
    (p) => p.name === "title"
  ) as TextProperty;

  return (
    <Card className="w-full h-fit p-4">
      <div
        ref={fwref}
        className={cn(
          "flex w-[600px] h-[315px] pl-4 pt-4 space-x-4",
          `${background.gradientDirection} ${background.color}`
        )}
      >
        <div className="flex flex-col w-1/2">
          <img
            src={logo.path}
            alt="Selected Logo"
            width={40}
            height={40}
            className="rounded-md"
          />

          <p
            className={cn(
              "border rounded-xl w-fit px-2  mt-8",
              tag.font,
              `${tag.color.replace("bg", "text")}`
            )}
          >
            {tag.text}
          </p>
          <p className={cn("text-3xl  mt-4", title.font, `${title.color}`)}>
            {title.text}
          </p>
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
                src={image.path}
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
