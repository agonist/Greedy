import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SolidBgSelect } from "./solid-bg-select";

type Props = {
  color: string;
  setColor: (color: string) => void;
};

export const BgSelect: React.FC<Props> = ({ color, setColor }) => {
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
          <TabsContent value="gradient">Change your password here.</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
