"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { templates } from "@/constants/templates";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";

export const TemplatesGallery = () => {
  const router = useRouter();
  const create = useMutation(api.document.create);
  const [isCreating, setIsCreating] = useState(false);

  const onTemplateClick = (title: string, initialContent: string) => {
    setIsCreating(true);
    create({ title, initialContent })
      .then((documentId) => {
        router.push(`/documents/${documentId}`);
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  return (
    <div className="bg-[#F1F3F4]">
      <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
        <h3 className="font-medium">Start a new document</h3>
        <Carousel>
          <CarouselPrevious />
          <CarouselContent className="-ml-4">
            {templates.map((template) => {
              return (
                <CarouselItem
                  key={template.id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.2857143%] pl-4"
                >
                  <div
                    className={cn(
                      "aspect-[3/4] flex flex-col gap-y-2.5",
                      isCreating && "pointer-events-none opacity-50"
                    )}
                  >
                    <button
                      disabled={isCreating}
                      // TODO: Add proper initial content
                      onClick={() => onTemplateClick(template.name, "")}
                      style={{
                        backgroundImage: `url(${template.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="size-full border hover:border-blue-600 rounded-sm hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                    />
                    <p className="text-sm font-medium truncate">
                      {template.name}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
