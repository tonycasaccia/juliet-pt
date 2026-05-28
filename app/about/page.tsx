import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutJuliet } from "@/components/about-juliet";

export const metadata: Metadata = {
  title: "About Juliet St. Germain | Physical Therapist",
  description:
    "Learn about Juliet St. Germain, DPT, CFMT - her education, clinical philosophy, aquatic therapy expertise, and approach to patient care.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutJuliet />
      </main>
      <Footer />
    </>
  );
}
