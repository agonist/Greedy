import { TextProperty } from "@/types/template";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
  t: TextProperty;
  setText: (value: TextProperty) => void;
};

export const TextEditor: React.FC<Props> = ({ t, setText }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={t.name.toLowerCase()}>{t.name}</Label>
      <Input
        type="text"
        id={t.name.toLowerCase()}
        placeholder={t.name}
        value={t.text}
        onChange={(ev) =>
          setText({
            ...t,
            text: ev.target.value,
          })
        }
      />
    </div>
  );
};
