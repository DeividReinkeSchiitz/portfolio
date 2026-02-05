import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function RadiusBlur({ children }: Props) {
  return (
    <>
      {/* Top right blue glow */}
      <div
        className="w-[60%] h-[60%] absolute top-0 right-0 filter blur-[120px] z-[-1]"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--blue-RGB), 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Bottom left white glow */}
      <div
        className="w-[50%] h-[50%] absolute bottom-20 left-0 filter blur-[100px] z-[-1]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Middle accent */}
      <div
        className="w-[40%] h-[40%] absolute top-1/2 left-1/4 filter blur-[150px] z-[-1]"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--blue-RGB), 0.08) 0%, transparent 60%)",
        }}
      />

      {children}
    </>
  );
}
