import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { MeetJuliet } from "@/components/meet-juliet";
import { Facilities } from "@/components/facilities";
// import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MeetJuliet />
      <About />
      <Services />
      <Facilities />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
}
