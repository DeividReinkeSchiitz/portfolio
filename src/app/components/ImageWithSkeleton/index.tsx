"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function ImageWithSkeleton(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-white/[0.04] animate-pulse" />
      )}
      <Image
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          if (typeof props.onLoad === "function") {
            props.onLoad(e);
          }
        }}
        preload={true}
      />
    </>
  );
}
