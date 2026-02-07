"use client";
import { useState, useEffect } from "react";

function SquaresBack() {
  const [hoveredSquareIndex, setHoveredSquareIndex] = useState<number | null>(
    null,
  );

  const handleMouseMove = (event: MouseEvent) => {
    const squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
      const square = squares[i] as HTMLElement;
      const rect = square.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (isInside) {
        setHoveredSquareIndex(i);
        return;
      }
    }
    setHoveredSquareIndex(null); // Reset if mouse is not over any square
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const squares = [];
  for (let i = 0; i < 100; i++) {
    squares.push(
      <div
        key={i}
        id={`black-square-${i}`}
        className={`square border-b border-r bg-background border-gray-800 border-opacity-50  ${
          hoveredSquareIndex === i
            ? "border-t border-l hover:transform bg-[var(--hover-surface)] scale-105 transition-transform duration-300 ease-in-out"
            : ""
        }`}
      />,
    );
  }

  return (
    <div className="absolute grid grid-cols-10 w-full h-screen z-0 inset-0 overflow-hidden ">
      {squares}
    </div>
  );
}

export default SquaresBack;
