"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MeetJuliet() {
  return (
    <section id="meet-juliet" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
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
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Your Therapist
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
              Meet Juliet St. Germain
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over 15 years of clinical experience, Juliet holds a Doctorate 
              in Physical Therapy from Northern Arizona University and is a{" "}
              <span className="text-primary font-medium">
                Certified Functional Manual Therapist
              </span>
              —specializing in an integrative whole-systems approach that addresses 
              the root cause of dysfunction, not just the symptoms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              She works with athletes from recreational to Olympic level across 
              cycling, running, swimming, triathlon, and more. Her unique expertise 
              in aquatic therapy and race medicine makes her a trusted partner for 
              those who demand peak performance.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              Learn more about Juliet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
