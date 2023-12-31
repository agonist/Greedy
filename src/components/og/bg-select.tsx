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
  color: string;
  direction: string;
  setColor: (color: string) => void;
  setDirection: (direction: string) => void;
};

export const BgSelect: React.FC<Props> = ({
  color,
  setColor,
  direction,
  setDirection,
}) => {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Background</CardTitle>
        <CardDescription>Cute colors and such</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="solid" className="w-fit">
          <TabsList>
            <TabsTrigger value="solid">Solid</TabsTrigger>
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
          </TabsList>
          <TabsContent value="solid">
            <SolidBgSelect color={color} setColor={setColor} />
          </TabsContent>
          <TabsContent value="gradient" className="flex flex-col space-y-2">
            <GradientBgSelect
              color={color}
              setColor={setColor}
              direction={direction}
            />
            <GradientDirectionSelect
              direction={direction}
              setDirection={setDirection}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
