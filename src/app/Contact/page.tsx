import RadiusBlur from "@/app/Contact/RadiusBlur";
import AnimatedContactHeader from "./components/AnimatedContactHeader";
import { contactInfo } from "./constants";
import SocialMedias from "@/app/components/SocialMedias";

export default function Contact() {
  return (
    <div className="flex flex-col justify-evenly py-12 gap-12 relative h-full w-full items-center overflow-hidden">
      <RadiusBlur />

      <AnimatedContactHeader
        locationText={contactInfo.locationText}
        title={contactInfo.title}
        description={contactInfo.description}
        locationIcon={contactInfo.icons.location}
        globeIcon={contactInfo.icons.globe}
      />

      <SocialMedias social_medias={contactInfo.social_medias} />
    </div>
  );
}
