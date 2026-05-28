"use client";

import Link from "next/link";
import {
  GraduationCap,
  Award,
  Waves,
  Heart,
  BookOpen,
  Users,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

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
      "Published research on resistance training and hypertrophy",
      "Physiological effects of exercise studies",
      "Actively involved in clinical research and presentation",
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
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-border/50 shadow-xl sticky top-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="font-serif text-4xl font-medium text-primary">
                        JSG
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Photo placeholder
                    </p>
                  </div>
                </div>
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
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Doctor of Physical Therapy, Certified Functional Manual
                Therapist
              </p>

              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  Juliet was born and raised in Albuquerque, New Mexico. She
                  earned her B.S. in Physiology & Exercise Science from the
                  University of New Mexico and her Doctorate in Physical Therapy
                  from Northern Arizona University, graduating with distinction.
                </p>
                <p className="leading-relaxed">
                  She is published in research on resistance training,
                  hypertrophy, and the physiological effects of exercise, and
                  plans to remain actively involved in clinical research and
                  presentation.
                </p>
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
              {"Juliet's treatment philosophy follows an "}
              <span className="font-semibold text-foreground">
                integrative whole-systems approach
              </span>
              {
                " influenced by the Institute of Physical Art and the Barral Institute."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-secondary/30 rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Certified Functional Manual Therapist
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After completing the rigorous process to become a CFMT through
                the Institute of Physical Art, Juliet works with both
                non-athletes and athletes ranging from recreational to Olympic
                level.
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
                Juliet is the director and developer of the Aquatic Wellness and
                Therapy program at Menlo Swim and Sport.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                She values connection within community and expanding access to
                care through group-based and one-on-one aquatic rehabilitation.
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
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
                Outside the Clinic
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of practice, Juliet enjoys trail and road cycling,
              running, and swimming — and embraces being a beginner in new
              experiences, from wine tasting to Flamenco dancing.
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
              Schedule your initial consultation and start your journey to
              better movement.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
