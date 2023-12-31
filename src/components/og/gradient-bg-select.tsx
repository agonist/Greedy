import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const colors = [
  "from-blue-100 via-blue-300 to-blue-500",
  "from-blue-300 via-green-200 to-yellow-300",
  "from-blue-700 via-blue-800 to-gray-900",
  "from-gray-700 via-gray-900 to-black",
  "from-gray-200 via-gray-400 to-gray-600",
  "from-gray-400 via-gray-600 to-blue-800",
  "from-green-300 via-blue-500 to-purple-600",
  "from-green-200 via-green-300 to-blue-500",
  "from-green-200 via-green-400 to-purple-700",
  "from-green-300 via-yellow-300 to-pink-300",
  "from-green-200 to-green-500",
  "from-green-200 via-green-400 to-green-500",
  "from-green-300 to-purple-400",
  "from-indigo-200 via-red-200 to-yellow-100",
  "from-indigo-300 to-purple-400",
  "from-pink-500 via-red-500 to-yellow-500",
  "from-pink-300 via-purple-300 to-indigo-400",
  "from-purple-200 via-purple-400 to-purple-800",
  "from-purple-400 to-yellow-400",
  "from-red-200 via-red-300 to-yellow-200",
  "from-red-200 to-red-600",
  "from-red-400 via-gray-300 to-blue-500",
  "from-red-800 via-yellow-600 to-yellow-500",
  "from-yellow-100 via-yellow-300 to-yellow-500",
  "from-yellow-200 via-green-200 to-green-500",
  "from-yellow-200 via-yellow-400 to-yellow-700",
  "from-yellow-200 to-yellow-500",
  "from-yellow-200 via-green-200 to-green-300",
  "from-yellow-200 via-yellow-300 to-yellow-400",
  "from-yellow-200 via-pink-200 to-pink-400",
];

type Props = {
  color: string;
  setColor: (color: string) => void;
  direction: string;
};

export const GradientBgSelect: React.FC<Props> = ({
  color,
  setColor,
  direction,
}) => {
  return (
    <RadioGroup
      value={color}
      onValueChange={(v) => {
        setColor(v);
      }}
      className="grid grid-cols-8 "
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
          <div className={cn("h-7 w-7 rounded-sm", `${direction} ${c}`)} />
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};
