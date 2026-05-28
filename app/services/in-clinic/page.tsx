import type { Metadata } from "next";
import { InClinicService } from "@/components/in-clinic-service";

export const metadata: Metadata = {
  title: "In Clinic Physical Therapy | Juliet St. Germain PT",
  description:
    "One-on-one hour-long physical therapy sessions at our Palo Alto clinic. Fully individualized treatment focusing on restoring function, reducing pain, and improving movement quality.",
};

export default function InClinicPage() {
  return <InClinicService />;
}
