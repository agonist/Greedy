"use client";

import { BgSelect } from "@/components/og/bg-select";
import { FirstPreview } from "@/components/og/first-preview";
import { SaveImg } from "@/components/og/save-img";
import { TemplateOptions } from "@/components/og/template-options";
import { Template } from "@/types/template";
import { useToPng } from "@hugocxl/react-to-image";
import { useState } from "react";

const useStateGeneric = <T extends Template>(initialState: T) => {
  return useState<T>(initialState);
};

export const FreeOgImageBuilder = () => {
  const [template, setTemplate] = useStateGeneric({
    name: "First Template",
    properties: [
      {
        name: "tag",
        color: "text-black",
        text: "OG KUSH",
        font: "inter",
      },
      {
        name: "title",
        color: "text-black",
        text: "Your very own Open Graph Images",
        font: "inter",
      },
      {
        name: "background",
        color: "from-pink-300 via-purple-300 to-indigo-400",
        gradientDirection: "bg-gradient-to-t",
      },
      {
        name: "image",
        path: "img/screenshot.png",
      },
      {
        name: "logo",
        path: "img/logo.png",
      },
    ],
  });

  const updatePropertyByName = (
    propertyName: string,
    newPropertyValues: any
  ) => {
    setTemplate((prevTemplate) => {
      // Find the index of the property to update
      const propertyIndex = prevTemplate.properties.findIndex(
        (prop) => prop.name === propertyName
      );

      if (propertyIndex === -1) {
        console.warn(`Property with name ${propertyName} not found.`);
        return prevTemplate; // Return the original state if property not found
      }

      // Create a new array with the updated property
      const updatedProperties = [
        ...prevTemplate.properties.slice(0, propertyIndex), // Elements before the updated property
        {
          ...prevTemplate.properties[propertyIndex],
          ...newPropertyValues, // Update the specific property
        },
        ...prevTemplate.properties.slice(propertyIndex + 1), // Elements after the updated property
      ];

      // Return the new state
      return {
        ...prevTemplate,
        properties: updatedProperties,
      };
    });
  };

  const [state, convertToPng, ref] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      console.log(data);
      const link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = data;
      link.click();
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <main className="container mx-auto">
      <div className="flex w-full py-4 space-x-4 ">
        <div className="flex flex-col w-3/12 space-y-4  overflow-y-auto h-80vh">
          <TemplateOptions
            properties={template.properties}
            updateProperty={updatePropertyByName}
          />
          <BgSelect
            properties={template.properties}
            updateProperty={updatePropertyByName}
          />

          {/* <TextOptions font={builder.font} setFont={builder.setFont} /> */}
        </div>
        <div className="flex flex-col w-fit space-y-4 ">
          <div className="sticky top-1">
            <FirstPreview template={template} fwref={ref} />
            <SaveImg savePng={convertToPng} />
          </div>
        </div>
      </div>
    </main>
  );
};
