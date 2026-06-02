"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Waves,
  Check,
  Clock,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Reduced joint stress and impact during exercise",
  "Increased range of motion and flexibility",
  "Improved balance and coordination",
  "Enhanced strength through water resistance",
  "Accelerated recovery from injury or surgery",
  "Pain relief through hydrostatic pressure",
];

const idealFor = [
  "Post-surgical rehabilitation",
  "Arthritis and joint conditions",
  "Chronic pain management",
  "Balance and fall prevention",
  "Sports injury recovery",
  "Neurological conditions",
  "Seniors seeking low-impact exercise",
];

export function AquaticTherapyService() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Waves className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
                Aquatic Physical Therapy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Specialized aquatic rehabilitation at Burgess Pool combining 
                advanced physical therapy techniques with the therapeutic 
                properties of water for accelerated healing and improved mobility.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Thursdays 9-10 AM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Burgess Pool, Menlo Park</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Small group sessions</span>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full">
                <a 
                  href="https://saintgermainphysicaltherapy.janeapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/images/aquatic-therapy.jpg" 
                  alt="Aquatic therapy session at Burgess Pool" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
                Benefits of Aquatic Therapy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Water provides a unique therapeutic environment that allows for 
                exercise and movement that may be difficult or painful on land. 
                The buoyancy, resistance, and hydrostatic pressure of water 
                create ideal conditions for rehabilitation.
              </p>

              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
                Ideal For
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Aquatic therapy is particularly beneficial for patients who need 
                a gentler approach to rehabilitation or those looking to 
                supplement their land-based physical therapy program.
              </p>

              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Session Details
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Aquatic therapy sessions are held at Burgess Pool in Menlo Park 
              every Thursday from 9-10 AM. Sessions are conducted in small groups 
              to ensure personalized attention while fostering a supportive 
              community environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">Burgess Pool, Menlo Park</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Schedule</p>
                <p className="font-semibold text-foreground">Thursdays, 9-10 AM</p>
              </div>
              <div className="px-6 py-4 rounded-xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">Format</p>
                <p className="font-semibold text-foreground">Small Group Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experience the healing benefits of aquatic therapy. Book your 
              session today and take the first step toward better movement.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a 
                href="https://saintgermainphysicaltherapy.janeapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
