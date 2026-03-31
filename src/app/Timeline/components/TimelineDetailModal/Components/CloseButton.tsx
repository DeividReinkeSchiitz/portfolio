import Image from "next/image";

interface CloseButtonProps {
  onClose: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center 
        rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 
        transition-all duration-200 backdrop-blur-sm"
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
