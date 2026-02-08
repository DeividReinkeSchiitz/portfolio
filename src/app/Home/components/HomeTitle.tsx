import Text from "@/app/components/Text";

interface HomeTitleProps {
  greeting: string;
  description: string;
}

export default function HomeTitle({ greeting, description }: HomeTitleProps) {
  return (
    <div className="flex flex-col pt-28 items-center justify-center flex-[3] font-light">
      <span className="font-light bg-gradient-to-r from-pink-50 to-[var(--blue)] inline-block text-transparent bg-clip-text">
        {greeting}
      </span>

      <Text
        className="md:!text-6xl !text-4xl text-center font-bold"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
