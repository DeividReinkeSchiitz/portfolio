import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function RadiusBlur({ children }: Props) {
  return (
    <>
      <div
        className={`w-[100%] h-[100%] absolute top-1/2 right-1/2 filter blur-[100px] z-[-1]`}
        style={{
          background:
            "radial-gradient(circle,   rgba(var(--blue-RGB), 0.2) 20%, transparent 50%)",
        }}
      />
      <div
        className={`w-[100%] h-[100%] absolute bottom-1/2 left-1/2 filter blur-[100px] z-[-1]`}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2), transparent 50%)",
        }}
      />

      {children}
    </>
  );
}
