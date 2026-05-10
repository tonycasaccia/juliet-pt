"use client";

import {
  UserCheck,
  BookOpen,
  Trophy,
  Sparkles,
  Brain,
  Crown,
} from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "1-on-1 Personalized Care",
    description:
      "Every session is one-on-one with Juliet. No aides, no handoffs—just dedicated, expert attention focused entirely on you.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Treatment",
    description:
      "Treatment protocols grounded in the latest research and clinical evidence, ensuring you receive the most effective care available.",
  },
  {
    icon: Trophy,
    title: "Performance-Focused Approach",
    description:
      "Whether recovering from injury or optimizing performance, every treatment plan is designed with your goals in mind.",
  },
  {
    icon: Sparkles,
    title: "Elite Athlete Experience",
    description:
      "Benefit from techniques and approaches developed while working with collegiate, professional, and Olympic-level athletes.",
  },
  {
    icon: Brain,
    title: "Modern Treatment Philosophy",
    description:
      "Integrating manual therapy, movement science, and cutting-edge modalities for comprehensive, holistic care.",
  },
  {
    icon: Crown,
    title: "Concierge-Level Attention",
    description:
      "Flexible scheduling, prompt communication, and a premium experience from your first call through your final session.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Why Choose Juliet
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            The Difference is in the Details
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience physical therapy that exceeds expectations—where elite expertise 
            meets personalized attention.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <benefit.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
