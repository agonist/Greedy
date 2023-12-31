import React from "react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  IcArrowDown,
  IcArrowDownLeft,
  IcArrowDownRight,
  IcArrowLeft,
  IcArrowRight,
  IcArrowUp,
  IcArrowUpLeft,
  IcArrowUpRight,
  IcCircleArrowDown,
  IcCircleArrowDownLeft,
  IcCircleArrowDownRight,
  IcCircleArrowLeft,
  IcCircleArrowRight,
  IcCircleArrowUp,
  IcCircleArrowUpLeft,
  IcCircleArrowUpRight,
} from "../ui/icons";

type Props = {
  direction: string;
  setDirection: (direction: string) => void;
};

export const GradientDirectionSelect: React.FC<Props> = ({
  direction,
  setDirection,
}) => {
  const directionl = [
    { dir: "bg-gradient-to-t", ic: <IcArrowUp /> },
    { dir: "bg-gradient-to-tr", ic: <IcArrowUpRight /> },
    { dir: "bg-gradient-to-r", ic: <IcArrowRight /> },
    { dir: "bg-gradient-to-br", ic: <IcArrowDownRight /> },
    { dir: "bg-gradient-to-b", ic: <IcArrowDown /> },
    { dir: "bg-gradient-to-bl", ic: <IcArrowDownLeft /> },
    { dir: "bg-gradient-to-l", ic: <IcArrowLeft /> },
    { dir: "bg-gradient-to-tl", ic: <IcArrowUpLeft /> },
    {
      dir: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowUp />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowUpRight />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowRight />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowDownRight />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowDown />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowDownLeft />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowLeft />,
    },
    {
      dir: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
      ic: <IcCircleArrowUpLeft />,
    },
  ];

  return (
    <RadioGroup
      value={direction}
      onValueChange={(v) => {
        setDirection(v);
      }}
      className="grid grid-cols-8 gap-2"
    >
      {directionl.map((c, i) => (
        <RadioGroupItem
          key={i}
          value={c.dir}
          aria-label="Toggle bold"
          className={cn(
            "flex p-1 rounded-md border-2 items-center justify-center",
            direction === c.dir ? " border-white" : "border-neutral-500"
          )}
        >
          {c.ic}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};
