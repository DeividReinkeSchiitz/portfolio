import Text from "@/app/components/Text";

export default function TimelineFooter() {
  return (
    <div className="mt-20 text-center pb-10">
      <Text className="!text-xl font-normal opacity-70 mb-4">
        Want to be part of my journey?
      </Text>
      <a
        href="/Contact"
        className="group inline-block px-8 py-3 border border-[rgba(var(--blue-RGB),0.5)] rounded-full 
                    hover:bg-[rgba(var(--blue-RGB),0.5)] hover:bg-opacity-20 transition-all duration-300
                    "
      >
        <Text className="!text-lg font-semibold group-hover:!text-white duration-300">
          Let&apos;s <span>Connect</span>
        </Text>
      </a>
    </div>
  );
}
