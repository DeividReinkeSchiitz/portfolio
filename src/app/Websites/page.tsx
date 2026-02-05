import PageHeader from "@/app/components/PageHeader";
import WebsitesList from "@/app/components/WebsitesList";
import { websitesPageConfig } from "./constants";

export default function Websites() {
  return (
    <>
      <PageHeader
        title={websitesPageConfig.title}
        description={websitesPageConfig.description}
        icons={websitesPageConfig.icons}
      />
      <WebsitesList />
    </>
  );
}
