"use client";

import Link from "next/link";
import {
  GraduationCap,
  Award,
  Waves,
  Heart,
  BookOpen,
  ArrowLeft,
  ExternalLink,
  Bike,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "B.S. in Physiology & Exercise Science — University of New Mexico",
      "Doctorate in Physical Therapy — Northern Arizona University (with distinction)",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: [
      "Certified Functional Manual Therapist (CFMT)",
      "Institute of Physical Art trained",
      "Barral Institute trained",
    ],
  },
  {
    icon: BookOpen,
    title: "Research & Publications",
    items: [
      "Periodization for maximizing hypertrophy",
      "Resistance Training Volume and hypertrophy",
      "Acute effects of mask wearing on exercise performance and recovery",
    ],
  },
  {
    icon: Heart,
    title: "Race Medicine",
    items: [
      "Medical team member — Western States 100 Mile Ultramarathon",
      "Acute orthopedic care for endurance athletes",
    ],
  },
];

const sports = [
  "Cycling",
  "Running",
  "Swimming",
  "Triathlon",
  "Soccer",
  "Baseball",
];

export function AboutJuliet() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#meet-juliet"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-border/50 shadow-xl sticky top-32">
                <img
                  src="/images/juliet-headshot.JPG"
                  alt="Juliet St. Germain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Your Therapist
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-8 text-balance">
                Juliet St. Germain
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Doctor of Physical Therapy, Certified Functional Manual Therapist
              </p>

              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  Juliet was born and raised in the beautiful high desert of Albuquerque, New Mexico. She earned her B.S. in Physiology & Exercise Science from the University of New Mexico and her Doctorate in Physical Therapy from Northern Arizona University, graduating with distinction.
                </p>
                <p className="leading-relaxed">
                  Juliet is a Certified Functional Manual Therapist—specializing in an integrative whole-systems approach that addresses the root cause of dysfunction, not just the symptoms working with athletes and non-athletes from recreational to Olympic level across cycling, running, swimming, triathlon, and more.
                </p>
                <p className="leading-relaxed">
                  Her expertise allows athletes & recreational / "life" athletes get back to what they love & feel good doing so.”
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://juliet-pt.netlify.app/cv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View Full CV
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Clinical Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {"Juliet's treatment philosophy follows the "}
              <span className="font-semibold text-foreground">
                integrative whole-systems approach
              </span>
              {" of the Institute of Physical Art and the Barral Institute."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-secondary/30 rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Certified Functional Manual Therapist
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Juliet jumped through the rigorous journey to become a Certified Functional Manual Therapist (CFMT) studying for 3 years and testing in 2024. This education offers a degree of specificity in treatment with a whole system approach and consideration and deep dive into the pertinent medical history that shapes the presenting limitation.
              </p>
              
              <a
                href="https://instituteofphysicalart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
              >
                Learn more about IPA
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Sports Specialties
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Specialized experience across multiple sports disciplines:
              </p>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport) => (
                  <span
                    key={sport}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground text-center mb-16">
            Credentials & Experience
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {credentials.map((credential) => (
              <div
                key={credential.title}
                className="p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <credential.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xl pt-2">
                    {credential.title}
                  </h3>
                </div>
                <ul className="space-y-3 ml-16">
                  {credential.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aquatic Therapy Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Waves className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                  Aquatic Therapy
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Juliet is the director and developer of the <span className="font-semibold text-foreground">Aquatic Wellness and Therapy program</span> at Menlo Swim and Sport.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                She finds immense value in connection within your community as well as finding alternatives for access to care. Here, she works with a variety of fitness levels and abilities in group settings or one-on-one.
              </p>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <Waves className="h-16 w-16 text-accent/50 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  Aquatic therapy photo placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bike className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Outside the Clinic
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of practice, Juliet enjoys trail and road cycling, running, swimming — and embraces being a beginner at new things from wine tasting to Flamenco dancing!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your initial consultation and start your journey to better movement.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <a
                href="https://saintgermainphysicaltherapy.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
