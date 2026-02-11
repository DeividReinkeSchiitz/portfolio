import Image from "next/image";

export default function DetailsIndicator() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white opacity-50 group-hover:opacity-70 transition-opacity">
      <span>Click for details</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        className="w-3 h-3"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
