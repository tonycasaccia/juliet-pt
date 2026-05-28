"use client";

import { Check } from "lucide-react";

const philosophyPoints = [
  "Movement as foundation for longevity",
  "Whole-systems integrative approach",
  "Evidence-based treatment techniques",
  "Individualized one-on-one care",
];

const approachPoints = [
  "Manual therapy",
  "Neuromuscular facilitation",
  "Core training",
  "Strength training and conditioning",
  "Sport-specific rehab",
  "Movement re-training and coordination",
];

const visionPoints = [
  "Build a record of what your body can do",
  "Track how it adapts over time",
  "Create evidence of your own strength",
  "Celebrate progress, not perfection",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            How You Move Is How You Live
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            At Juliet St. Germain Physical Therapy, we believe{" "}
            <span className="font-semibold text-foreground">movement is medicine</span>.
            With a proven track record of helping athletes, executives, and
            everyday people recover and thrive, we combine{" "}
            <span className="text-primary font-medium">
              evidence-based techniques
            </span>
            , skilled expertise, and a patient-centric approach to restore
            function and build lasting strength.
          </p>
        </div>

        {/* Philosophy Section - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image Collage Placeholder */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border border-border" />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-primary/20 border border-border" />
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-primary/20 border border-border" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Strength is not always loud. It often looks like showing up on a
                hard day, taking the first step toward healing, or trusting that
                your body is capable of more than you believe.
              </p>
              <p>
                My role is to walk alongside you, listen, and create a space of
                acknowledgement and support. Whether you&apos;re an athlete
                chasing a goal or someone simply working to feel better in your
                own body, care should meet you where you are.
              </p>
            </div>
            <ul className="space-y-3">
              {philosophyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision Section - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Our Vision
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Our vision is to redefine physical therapy through innovation,
                compassion, and excellence. We aim to create treatment
                experiences that not only heal but also inspire and contribute
                to your long-term well-being.
              </p>
              <p>
                By embracing cutting-edge techniques and a whole-systems
                approach, we strive to lead the industry toward a future where
                movement is medicine. Our focus is on delivering value, quality,
                and longevity in every session.
              </p>
            </div>
            <ul className="space-y-3">
              {visionPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Collage Placeholder */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-8">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent/20 via-primary/15 to-accent/20 border border-border" />
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/15 border border-border" />
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/15 via-primary/10 to-accent/20 border border-border" />
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Approach Section - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Collage Placeholder */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 border border-border" />
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-primary/10 to-accent/15 border border-border" />
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 via-accent/20 to-primary/20 border border-border" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">
              Clinical Approach
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                This practice follows an integrative whole-systems model
                inspired by the{" "}
                <a
                  href="https://instituteofphysicalart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Institute of Physical Art
                </a>{" "}
                and the Barral Institute, treating the body as an interconnected
                system rather than isolated parts.
              </p>
              <p>
                Care is one-on-one and individualized, using up-to-date and
                state-of-practice treatment techniques with tailored exercise
                prescription and programming designed specifically for your
                goals and needs.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {approachPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
