import PageHeader from "@/app/components/PageHeader";
import MobilesList from "@/app/components/MobilesList";
import { mobilesPageConfig } from "./constants";

export default function Mobiles() {
  return (
    <>
      <PageHeader
        title={mobilesPageConfig.title}
        description={mobilesPageConfig.description}
        icons={mobilesPageConfig.icons}
      />
      <MobilesList />
    </>
  );
}
