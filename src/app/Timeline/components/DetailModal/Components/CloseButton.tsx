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
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5L5 15M5 5L15 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
