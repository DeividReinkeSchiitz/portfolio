export default function GradientOverlay() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style={{
        background:
          "linear-gradient(to top, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0.8) 30%, transparent 100%)",
      }}
    />
  );
}
