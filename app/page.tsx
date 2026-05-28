import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { MeetJuliet } from "@/components/meet-juliet";
import { Facilities } from "@/components/facilities";
import { Testimonials } from "@/components/testimonials";
import { BookingCTA } from "@/components/booking-cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <MeetJuliet />
      <Facilities />
      <Testimonials />
      <BookingCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
