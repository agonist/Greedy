import { BackgroundProperty, TemplateProperty } from "@/types/template";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { GradientBgSelect } from "./gradient-bg-select";
import { GradientDirectionSelect } from "./gradient-direction-select";
import { SolidBgSelect } from "./solid-bg-select";

type Props = {
  properties: TemplateProperty[];
  updateProperty: (name: string, value: any) => void;
};

export const BgSelect: React.FC<Props> = ({ properties, updateProperty }) => {
  const background = properties.find(
    (p) => p.name === "background"
  ) as BackgroundProperty;

  function updateColor(color: string) {
    updateProperty("background", {
      ...background,
      color: color,
    });
  }

  function updateDirection(direction: string) {
    updateProperty("background", {
      ...background,
      gradientDirection: direction,
    });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Background</CardTitle>
        <CardDescription>Cute colors and such</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="gradient"
          className="w-fit"
          onValueChange={(value) => {
            if (value === "gradient") {
              updateColor("from-pink-300 via-purple-300 to-indigo-400");
              // setColor("from-pink-300 via-purple-300 to-indigo-400");
            } else {
              updateColor("bg-[#e5715b]");

              // setColor("bg-[#e5715b]");
            }
          }}
        >
          <TabsList>
            <TabsTrigger value="solid">Solid</TabsTrigger>
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
          </TabsList>
          <TabsContent value="solid">
            <SolidBgSelect color={background.color} setColor={updateColor} />
          </TabsContent>
          <TabsContent value="gradient" className="flex flex-col space-y-2">
            <GradientBgSelect
              color={background.color}
              setColor={updateColor}
              direction={background.gradientDirection}
            />
            <GradientDirectionSelect
              direction={background.gradientDirection}
              setDirection={updateDirection}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
