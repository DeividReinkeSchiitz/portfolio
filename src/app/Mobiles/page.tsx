import PageHeader from "@/app/components/PageHeader";
import ProjectShowcase from "@/app/components/ProjectShowcase";
import { mobilesPageConfig, mobileProjects } from "./constants";

export default function Mobiles() {
  return (
    <div className="min-h-screen text-white relative">
      <PageHeader
        title={mobilesPageConfig.title}
        description={mobilesPageConfig.description}
        icons={mobilesPageConfig.icons}
      />
      <ProjectShowcase projects={mobileProjects} />
    </div>
  );
}
