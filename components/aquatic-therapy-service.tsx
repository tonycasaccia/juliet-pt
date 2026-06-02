"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Waves,
  Check,
  Clock,
  MapPin,
  Calendar,
  Thermometer,
  DollarSign,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Reduces joint stress and pain",
  "Improves strength and flexibility",
  "Enhances balance and mobility",
  "Improves cardiovascular function",
  "Faster recovery",
  "Suitable for all ages and fitness levels",
];

const focusAreas = [
  "Strength",
  "Mobility and flexibility",
  "Balance and stability",
  "Endurance",
  "Stationary drills",
  "Ambulatory movement through pool",
  "Shallow and deep water work",
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
                Aquatic Therapy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our specialized aquatic physical therapy program combines advanced 
                rehabilitation techniques with water&apos;s therapeutic properties to 
                accelerate your recovery and enhance wellness.
              </p>

              <Button asChild size="lg" className="rounded-full">
                <a 
                  href="https://saintgermainphysicaltherapy.janeapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Assessment
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
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-8">
                Benefits of Aquatic Therapy
              </h2>

              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-8">
                Focus
              </h2>

              <ul className="space-y-4">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert-led group sessions and personalized one-on-one treatments (30 or 60 minutes). 
              Whether you&apos;re recovering from surgery, managing chronic pain, or seeking improved 
              function, our aquatic therapy program offers a proven path to better movement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-8 text-center">
              Details
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="px-6 py-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Where to go</p>
                </div>
                <p className="font-semibold text-foreground">Burgess / Menlo Park Pool</p>
              </div>

              <div className="px-6 py-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Schedule</p>
                </div>
                <p className="font-semibold text-foreground">Every Thursday 9:00-10:00 am</p>
              </div>

              <div className="px-6 py-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Pool temperature</p>
                </div>
                <p className="font-semibold text-foreground">87°</p>
              </div>

              <div className="px-6 py-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Drop in fee</p>
                </div>
                <p className="font-semibold text-foreground">$25 / class</p>
              </div>

              <div className="px-6 py-5 rounded-xl bg-card border border-border sm:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <Accessibility className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Accessibility</p>
                </div>
                <p className="font-semibold text-foreground">Handicap accessible - handrails and hydro-assist entry available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Schedule your assessment today and discover how aquatic therapy 
              can transform your rehabilitation journey.
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
