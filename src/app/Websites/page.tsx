import PageHeader from "@/app/components/PageHeader";
import WebsiteShowcase from "@/app/components/WebsiteShowcase";
import { websitesPageConfig, websiteProjects } from "./constants";

export default function Websites() {
  return (
    <div className="min-h-screen text-white relative">
      <PageHeader
        title={websitesPageConfig.title}
        description={websitesPageConfig.description}
        icons={websitesPageConfig.icons}
      />
      <WebsiteShowcase projects={websiteProjects} />
    </div>
  );
}
