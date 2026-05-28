"use client";

import { GraduationCap, Award, Waves, Heart } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "B.S. in Physiology & Exercise Science from University of New Mexico. Doctorate in Physical Therapy from Northern Arizona University, graduating with distinction.",
  },
  {
    icon: Award,
    title: "Certified Functional Manual Therapist",
    description:
      "Completed rigorous CFMT certification through the Institute of Physical Art. Works with athletes from recreational to Olympic level.",
  },
  {
    icon: Waves,
    title: "Aquatic Therapy Director",
    description:
      "Director and developer of the Aquatic Wellness and Therapy program at Menlo Swim and Sport.",
  },
  {
    icon: Heart,
    title: "Community & Research",
    description:
      "Published researcher and medical team member at the Western States 100 Mile ultramarathon.",
  },
];

export function MeetJuliet() {
  return (
    <section id="meet-juliet" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            Your Therapist
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Meet Juliet St. Germain
          </h2>
        </div>

        {/* Main Content - Image Left, Bio Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-border/50 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-3xl font-medium text-primary">
                      JSG
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Photo placeholder
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
          </div>

          {/* Bio Content */}
          <div className="lg:pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Juliet was born and raised in Albuquerque, New Mexico. She earned
              her B.S. in Physiology &amp; Exercise Science from the University of
              New Mexico and her Doctorate in Physical Therapy from Northern
              Arizona University, graduating with distinction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              She is published in research on resistance training, hypertrophy,
              and the physiological effects of exercise, and plans to remain
              actively involved in clinical research and presentation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {"Juliet's treatment philosophy follows an "}
              <span className="font-semibold text-foreground">
                integrative whole-systems approach
              </span>
              {" influenced by the Institute of Physical Art and the Barral Institute. After completing the rigorous process to become a "}
              <span className="text-primary font-medium">
                Certified Functional Manual Therapist (CFMT)
              </span>
              {", she works with both non-athletes and athletes ranging from recreational to Olympic level."}
            </p>

            {/* Sports */}
            <div className="mb-8">
              <p className="text-sm font-medium text-foreground mb-3">
                Sports Specialties
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cycling",
                  "Running",
                  "Swimming",
                  "Triathlon",
                  "Soccer",
                  "Baseball",
                ].map((sport) => (
                  <span
                    key={sport}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            {/* Western States */}
            <div className="p-4 bg-background rounded-xl border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Race Medicine:
                </span>{" "}
                Juliet serves on medical teams providing acute orthopedic care
                at the prestigious Western States 100 Mile ultramarathon.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Outside the Clinic */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Outside of practice, Juliet enjoys trail and road cycling, running,
            and swimming — and embraces being a beginner in new experiences,
            from wine tasting to Flamenco dancing.
          </p>
        </div>
      </div>
    </section>
  );
}
