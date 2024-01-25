"use client";

import { TextProperty } from "@/types/template";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { TextOptions } from "./text-options";
import { textColors } from "@/const";
import { TextColorSelect } from "./text-color-select";

type Props = {
  t: TextProperty;
  setText: (value: TextProperty) => void;
};

export const TextEditor: React.FC<Props> = ({ t, setText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className=" space-y-2 ">
      <div className="flex items-end space-x-4 ">
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
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="h-10">
            <CaretSortIcon className="h-6 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2 border-l pl-2  w-full">
        <TextOptions
          font={t.font}
          setFont={(f) => {
            setText({
              ...t,
              font: f,
            });
          }}
        />

        <TextColorSelect
          color={t.color}
          setColor={(c) => {
            setText({
              ...t,
              color: c,
            });
          }}
          colors={textColors}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};
