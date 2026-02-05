import Text from "@/app/components/Text";

export default function TimelineHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mb-16 justify-center mx-auto">
      <Text className="md:text-3xl sm:text-2xl font-bold mb-4">
        My <span>Journey</span>
      </Text>
      <Text className="!text-lg md:!text-xl font-normal opacity-80 max-w-xl">
        A timeline of my <span>professional experience</span>, education, and
        key <span>achievements</span> throughout my career.
      </Text>
    </div>
  );
}
