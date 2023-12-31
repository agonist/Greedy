"use client";

import { BgSelect } from "@/components/og/bg-select";
import { ImagePreview } from "@/components/og/image-preview";
import { SaveImg } from "@/components/og/save-img";
import {
  TemplateDefinition,
  TemplateOptions,
} from "@/components/og/template-options";
import { useOgBuilder } from "@/lib/state/live-og-state";
import { useToPng } from "@hugocxl/react-to-image";

export const FreeOgImageBuilder = () => {
  const defs: TemplateDefinition[] = [
    {
      hasTag: true,
      hasTitle: true,
    },
  ];

  const builder = useOgBuilder();

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
      <div className="flex w-full py-4 space-x-4">
        <div className="flex flex-col w-1/4 space-y-4  ">
          <TemplateOptions
            templateDefinition={defs[0]}
            tag={builder.tag}
            setTag={builder.setTag}
            title={builder.title}
            setTitle={builder.setTitle}
            logo={builder.logo}
            setLogo={builder.setLogo}
            image={builder.image}
            setImage={builder.setImage}
          />
          <BgSelect
            color={builder.bgColor}
            setColor={builder.setBgColor}
            direction={builder.gradientDirection}
            setDirection={builder.setGradientDirection}
          />
        </div>
        <div className="flex flex-col w-2/4 space-y-4">
          <ImagePreview
            tag={builder.tag}
            title={builder.title}
            bgColor={builder.bgColor}
            logo={builder.logo}
            banner={builder.image}
            gradientDirection={builder.gradientDirection}
            fwref={ref}
          />
          <SaveImg savePng={convertToPng} />
        </div>
        <div className="flex flex-col w-1/4 "></div>
      </div>
    </main>
  );
};
