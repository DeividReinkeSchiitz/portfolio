export default function DetailsIndicator() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-xs opacity-50 group-hover:opacity-70 transition-opacity">
      <span>Click for details</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 9L2 5L3 4L6 7L9 4L10 5L6 9Z" fill="currentColor" />
      </svg>
    </div>
  );
}
