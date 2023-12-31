import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export type TemplateDefinition = {
  hasTag: boolean;
  hasTitle: boolean;
};

type Props = {
  templateDefinition: TemplateDefinition;
  tag: string;
  setTag: (tag: string) => void;
  title: string;
  setTitle: (title: string) => void;
  logo: string;
  setLogo: (file: string) => void;
  image: string;
  setImage: (file: string) => void;
};

export const TemplateOptions = (props: Props) => {
  const handleLogoInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      props.setLogo(url);
    }
  };

  const handleImageInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      props.setImage(url);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Template Options</CardTitle>
        <CardDescription>Change values and oh suprise</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tag">Tag</Label>
          <Input
            type="text"
            id="tag"
            placeholder="Tag"
            value={props.tag}
            onChange={(ev) => props.setTag(ev.target.value)}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            value={props.title}
            onChange={(ev) => props.setTitle(ev.target.value)}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="logo">Logo</Label>
          <Input id="logo" type="file" onChange={handleLogoInputChange} />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" onChange={handleImageInputChange} />
        </div>
      </CardContent>
    </Card>
  );
};
