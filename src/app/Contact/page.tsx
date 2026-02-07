import RadiusBlur from "@/app/Contact/RadiusBlur";
import AnimatedContactHeader from "./components/AnimatedContactHeader";
import AnimatedSocialMedias from "./components/AnimatedSocialMedias";
import { contactInfo } from "./constants";
import getStaticData from "@/../public/static";

export default async function Contact() {
  const static_data = await getStaticData();

  return (
    <div className="relative h-full w-full items-center overflow-hidden">
      <div className="flex flex-col h-full w-full items-center justify-evenly py-12 gap-12">
        <RadiusBlur />

        <AnimatedContactHeader
          locationText={contactInfo.locationText}
          title={contactInfo.title}
          description={contactInfo.description}
          locationIcon={contactInfo.icons.location}
          globeIcon={contactInfo.icons.globe}
        />

        <AnimatedSocialMedias socialMedias={static_data.social_medias} />
      </div>
    </div>
  );
}
