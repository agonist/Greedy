import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type Props = {
  colors: string[];
  color: string;
  setColor: (color: string) => void;
};

export const SolidBgSelect: React.FC<Props> = ({ color, setColor, colors }) => {
  return (
    <RadioGroup
      value={color}
      onValueChange={(v) => {
        console.log(v);
        setColor(v);
      }}
      className="grid grid-cols-8 gap-1"
    >
      {colors.map((c, i) => (
        <RadioGroupItem
          key={i}
          value={c}
          aria-label="Toggle bold"
          className={cn(
            "p-0 h-fit w-fit rounded-md border-2",
            color === c ? " border-white" : "border-transparent"
          )}
        >
          <div className={cn("h-7 w-7 rounded-sm", c)} />
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};
