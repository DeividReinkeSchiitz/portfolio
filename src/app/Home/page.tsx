import DownResume from "@/app/components/DownResume";
import Frameworks from "@/app/components/Frameworks";
import HomeTitle from "./components/HomeTitle";
import { homeContent } from "./constants";

export default function Home() {
  return (
    <div className="relative mt-48 flex-col self-center items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <HomeTitle greeting={homeContent.greeting} />

        <DownResume className="" />

        <Frameworks />
      </div>
    </div>
  );
}
