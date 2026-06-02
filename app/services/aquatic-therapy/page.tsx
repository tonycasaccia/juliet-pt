import type { Metadata } from "next";
import { AquaticTherapyService } from "@/components/aquatic-therapy-service";

export const metadata: Metadata = {
  title: "Aquatic Physical Therapy | Saint Germain Physical Therapy",
  description:
    "Specialized aquatic rehabilitation at Burgess Pool combining advanced physical therapy techniques with the therapeutic properties of water. Thursdays 9-10 AM.",
};

export default function AquaticTherapyPage() {
  return <AquaticTherapyService />;
}
