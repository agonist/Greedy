import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const colors = [
  "bg-[#000000]",
  "bg-[#ffffff]",
  "bg-[#e55b5b]",
  "bg-[#e5715b]",
  "bg-[#e5875b]",
  "bg-[#e59d5b]",
  "bg-[#e5b25b]",
  "bg-[#e5c85b]",
  "bg-[#e5de5b]",
  "bg-[#d7e55b]",
  "bg-[#c1e55b]",
  "bg-[#abe55b]",
  "bg-[#95e55b]",
  "bg-[#80e55b]",
  "bg-[#6ae55b]",
  "bg-[#5be563]",
  "bg-[#5be578]",
  "bg-[#5be58e]",
  "bg-[#5be5a4]",
  "bg-[#5be5ba]",
  "bg-[#5be5cf]",
  "bg-[#5be5e5]",
  "bg-[#5bcfe5]",
  "bg-[#5bbae5]",
  "bg-[#5ba4e5]",
  "bg-[#5b8ee5]",
  "bg-[#5b78e5]",
  "bg-[#5b63e5]",
  "bg-[#6a5be5]",
  "bg-[#805be5]",
  "bg-[#955be5]",
  "bg-[#ab5be5]",
  "bg-[#c15be5]",
  "bg-[#d75be5]",
  "bg-[#e55bde]",
  "bg-[#e55bc8]",
  "bg-[#e55bb2]",
  "bg-[#e55b9d]",
  "bg-[#e55b87]",
  "bg-[#e55b71]",
];

type Props = {
  color: string;
  setColor: (color: string) => void;
};

export const SolidBgSelect: React.FC<Props> = ({ color, setColor }) => {
  return (
    <RadioGroup
      value={color}
      onValueChange={(v) => {
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
