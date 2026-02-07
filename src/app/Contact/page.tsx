import SocialMedias from "@/app/components/SocialMedias";
import RadiusBlur from "@/app/Contact/RadiusBlur";
import ContactHeader from "./components/ContactHeader";
import { contactInfo } from "./constants";

export default function Contact() {
  return (
    <div className="relative h-full w-full items-center overflow-hidden">
      <div className="flex flex-col h-full w-full items-center justify-evenly">
        <RadiusBlur />

        <ContactHeader
          locationText={contactInfo.locationText}
          title={contactInfo.title}
          description={contactInfo.description}
          locationIcon={contactInfo.icons.location}
          globeIcon={contactInfo.icons.globe}
        />

        <SocialMedias />
      </div>
    </div>
  );
}
