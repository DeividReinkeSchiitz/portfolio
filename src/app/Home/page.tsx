import DownResume from "@/app/components/DownResume";
import Frameworks from "@/app/components/Frameworks";
import HomeTitle from "./components/HomeTitle";
import { homeContent } from "./constants";

export default function Home() {
  return (
    <div className="flex flex-col relative self-center items-center justify-center w-full h-full">
      <HomeTitle
        greeting={homeContent.greeting}
        description={homeContent.description}
      />

      <DownResume className="flex-1" />

      <Frameworks />
    </div>
  );
}
