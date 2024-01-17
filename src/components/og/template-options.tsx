import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import React from "react";
import { TextEditor } from "./text-editor";
import { ImageEditor } from "./image-editor";
import {
  ImageProperty,
  TemplateProperty,
  TextProperty,
} from "@/types/template";

type Props = {
  properties: TemplateProperty[];
  updateProperty: (name: string, value: any) => void;
};

export const TemplateOptions: React.FC<Props> = ({
  properties,
  updateProperty,
}) => {
  function renderComponent(field: any) {
    if (typeof field === "object" && field !== null) {
      if (isTextProperties(field)) {
        return (
          <TextEditor
            t={field}
            setText={(v) => {
              updateProperty(field.name, v);
            }}
          />
        );
      } else if (isImageProperties(field)) {
        return (
          <ImageEditor
            i={field}
            setImage={(i) => {
              updateProperty(field.name, i);
            }}
          />
        );
      }
    }

    return null;
  }

  const isTextProperties = (object: any): object is TextProperty => {
    return "text" in object && "font" in object;
  };

  const isImageProperties = (object: any): object is ImageProperty => {
    return "name" in object && "path" in object;
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Template Options</CardTitle>
        <CardDescription>Change values and oh suprise</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col space-y-4">
        {Object.values(properties).map((field, index) => (
          <div key={index}>{renderComponent(field)}</div>
        ))}
      </CardContent>
    </Card>
  );
};
