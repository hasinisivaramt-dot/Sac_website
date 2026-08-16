import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: string;
  containerClassName?: string;
}

export function ImagePlaceholder({
  src,
  alt = "Campus Image",
  fallbackSrc = "/pictures/common/default-image.jpg",
  aspectRatio = "aspect-[16/9]",
  containerClassName,
  className,
  ...props
}: ImagePlaceholderProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-100",
        aspectRatio,
        containerClassName
      )}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className={cn("h-full w-full object-cover transition-opacity duration-300", className)}
          {...props}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
          <ImageIcon className="h-8 w-8" />
        </div>
      )}
    </div>
  );
}
