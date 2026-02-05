"use client";
import React from "react";

interface ClientDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  open?: string;
}

// All children will be client side rendered
function ClientDiv({ children, open, ...rest }: ClientDivProps) {
  return (
    <div {...rest} onClick={() => window.open(open, "_blank")}>
      {children}
    </div>
  );
}

export default ClientDiv;
