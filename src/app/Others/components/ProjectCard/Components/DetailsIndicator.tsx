export default function DetailsIndicator() {
  return (
    <div className="flex items-center gap-2 mt-4 text-[var(--blue)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span>Click for more details</span>
      <span className="inline-block animate-[nudge-right_1.5s_ease-in-out_infinite]">
        →
      </span>
    </div>
  );
}
