import Image from "next/image";

export default function DetailsIndicator() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-xs opacity-50 group-hover:opacity-70 transition-opacity">
      <span>Click for details</span>
      <Image
        src="/chevron-down.svg"
        alt=""
        width={12}
        height={12}
        className="w-3 h-3"
      />
    </div>
  );
}
