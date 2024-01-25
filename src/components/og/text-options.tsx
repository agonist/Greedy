"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "../ui/label";

const fonts = [
  {
    value: "font-inter",
    label: "Inter",
  },
  {
    value: "font-opensans",
    label: "Open Sans",
  },
  {
    value: "font-notosans",
    label: "Noto Sans",
  },
  {
    value: "font-robotomono",
    label: "Roboto Mono",
  },
];

type Props = {
  font: string;
  setFont: (font: string) => void;
};

export const TextOptions: React.FC<Props> = ({ font, setFont }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={"font"}>Font</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {font
              ? fonts.find((framework) => framework.value === font)?.label
              : "Select framework..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput placeholder="Search Font..." className="h-9 w-full" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {fonts.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setFont(currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      font === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
