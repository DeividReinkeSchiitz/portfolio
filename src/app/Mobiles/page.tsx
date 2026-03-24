import PageHeader from "@/app/components/PageHeader";
import MobileShowcases from "@/app/Mobiles/components/MobileShowcases";
import { mobilesPageConfig, mobileProjects } from "./constants";

export default function Mobiles() {
  return (
    <div className="min-h-screen text-white relative">
      <PageHeader
        title={mobilesPageConfig.title}
        description={mobilesPageConfig.description}
        icons={mobilesPageConfig.icons}
      />
      <MobileShowcases projects={mobileProjects} />
    </div>
  );
}
