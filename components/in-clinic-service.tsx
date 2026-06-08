"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Check,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const treatmentIncludes = [
  "Manual therapy",
  "Neuromuscular re-education",
  "Strength and conditioning",
  "Sport-specific rehabilitation",
  "Movement retraining and coordination",
];

const conditions = [
  {
    area: "Cervical Spine",
    items: [
      "Headache",
      "Neck strains or sprains",
      "Cervical instability (CCI)",
      "Cervical radiculopathy",
      "Disc herniation",
      "Arthritis & stenosis",
      "Whiplash",
      "Concussion",
    ],
  },
  {
    area: "Thoracic Spine",
    items: ["Disc injury", "Ribcage dysfunction", "Scoliosis"],
  },
  {
    area: "Upper Extremity",
    items: [
      "Rotator cuff impingement, tear or repair",
      "Shoulder instability or dislocation",
      "Frozen shoulder / adhesive capsulitis",
      "Tennis elbow & golfers elbow",
      "Carpal tunnel syndrome",
    ],
  },
  {
    area: "Lumbar Spine",
    items: [
      "Lumbar radiculopathy",
      "Stenosis",
      "Disc injury",
      "Scoliosis",
      "Unspecified back pain",
    ],
  },
  {
    area: "Hip",
    items: [
      "Impingement",
      "Arthritis and spurring",
      "Bursitis",
      "Tendonitis / tendinopathy",
      "Labral tear",
    ],
  },
  {
    area: "Knee",
    items: [
      "Ligamentous injury (ACL, etc.)",
      "Meniscus",
      "Patellar dislocation",
    ],
  },
  {
    area: "Ankle & Foot",
    items: [
      "Sprains & strains",
      "Bunion",
      "Tendonitis / tendinopathy",
      "Achilles and calf injury",
      "Plantar fasciitis",
    ],
  },
  {
    area: "Other",
    items: [
      "Vertigo",
      "Concussion",
      "TMJ",
      "Pelvic health",
      "Tailbone injury",
      "Airway focused training",
      "Strength & conditioning programming",
      "Post-operative rehabilitation",
    ],
  },
];

export function InClinicService() {
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
                <Building2 className="h-7 w-7" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
                In Clinic Physical Therapy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                One-on-one hour-long sessions at our home base clinic in Palo
                Alto. Fully individualized treatment focusing on restoring
                function, reducing pain, and improving movement quality.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>60-minute sessions</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Palo Alto, CA</span>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full">
                <Link  href="https://saintgermainphysicaltherapy.janeapp.com"
                        target="_blank"
                        rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment
                </Link>
              </Button>
            </div>

            <div className="relative">
             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
  <img
    src="/images/hiking-trail.jpg"
    alt="Hiking trail"
    className="w-full h-full object-cover"
  />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sessions are one-on-one, hour long undivided &amp; individualized care 
              utilizing up to date and state of practice treatment techniques with 
              tailored exercise prescription and programming.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-4">
              Treatment may include:
            </h3>
            <ul className="space-y-3">
              {treatmentIncludes.map((item) => (
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
      </section>

      {/* Conditions Treated */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Conditions We Treat
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive care for a wide range of musculoskeletal and
              neurological conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((category) => (
              <div
                key={category.area}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-semibold text-foreground mb-4">
                  {category.area}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary leading-tight flex-shrink-0">•</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              Take the first step toward better movement and less pain. Book
              your initial consultation today.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link  href="https://saintgermainphysicaltherapy.janeapp.com"
                     target="_blank"
                      rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
