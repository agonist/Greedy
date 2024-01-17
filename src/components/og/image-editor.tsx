import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ImageProperty } from "@/types/template";

type Props = {
  i: ImageProperty;
  setImage: (value: ImageProperty) => void;
};

export const ImageEditor: React.FC<Props> = ({ i, setImage }) => {
  const handleLogoInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage({
        ...i,
        path: url,
      });
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={i.name}>{i.name}</Label>
      <Input id={i.name} type="file" onChange={handleLogoInputChange} />
    </div>
  );
};
