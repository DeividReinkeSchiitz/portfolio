interface ConnectorLineProps {
  isLeft: boolean;
}

export default function ConnectorLine({ isLeft }: ConnectorLineProps) {
  return (
    <div
      className={`hidden md:block absolute top-1/2 ${
        isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
      } w-8 h-[2px] bg-gradient-to-r ${
        isLeft
          ? "from-[var(--blue)] to-transparent"
          : "from-transparent to-[var(--blue)]"
      }`}
    />
  );
}
