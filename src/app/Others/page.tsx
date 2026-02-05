import PageHeader from "@/app/components/PageHeader";
import OthersList from "@/app/components/OthersList";
import { othersPageConfig } from "./constants";

export default function Others() {
  return (
    <>
      <PageHeader
        title={othersPageConfig.title}
        description={othersPageConfig.description}
        icons={othersPageConfig.icons}
      />
      <OthersList />
    </>
  );
}
