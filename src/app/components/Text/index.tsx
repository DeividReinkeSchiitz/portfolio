import React from "react";
import "./styles.css";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  typing?: boolean;
}

function Text({ children, typing, className, hover, ...rest }: TextProps) {
  return (
    <p
      className={`text-[var(--text-primary)] text-base
        ${hover && "hover:cursor-pointer hover:shadow-lg hover:scale-105 font-normal hover:transform transition-transform duration-300 ease-in-out"} 
        ${typing && "typewriter"}
        ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}

export default Text;
