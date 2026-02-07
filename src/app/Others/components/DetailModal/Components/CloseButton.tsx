import Image from "next/image";

interface CloseButtonProps {
  onClose: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700
                 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:rotate-90 active:scale-90"
      aria-label="Close modal"
    >
      <Image
        src="/close-x.svg"
        alt="Close"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </button>
  );
}
