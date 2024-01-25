import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Color, textColors } from "@/const";

type Props = {
  colors: Color[];
  color: string;
  setColor: (color: string) => void;
};

export const TextColorSelect: React.FC<Props> = ({
  color,
  setColor,
  colors,
}) => {
  const tcolors = textColors;

  return (
    <RadioGroup
      value={color}
      onValueChange={(v) => {
        console.log(v);
        setColor(v);
      }}
      className="grid grid-cols-8 gap-1"
    >
      {tcolors.map((c, i) => (
        <RadioGroupItem
          key={i}
          value={c.txt}
          aria-label="Toggle bold"
          className={cn(
            "p-0 h-fit w-fit rounded-md border-2",
            color === c.txt ? " border-white" : "border-transparent"
          )}
        >
          <div className={cn("h-7 w-7 rounded-sm", c.bg)} />
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};
