"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, ArrowRight } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Doctor of Physical Therapy",
    detail: "Stanford University",
  },
  {
    icon: Award,
    title: "Board-Certified Specialist",
    detail: "Sports Physical Therapy",
  },
  {
    icon: Users,
    title: "15+ Years Experience",
    detail: "Elite Athletes & Executives",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-border/50">
              {/* Portrait placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl font-serif text-primary/40">JS</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Professional Portrait</p>
                </div>
              </div>
              
              {/* Floating credential card */}
              <div className="absolute -right-4 top-1/4 bg-background/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-border/50 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Board Certified</p>
                    <p className="text-xs text-muted-foreground">Sports Specialist</p>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -left-4 bottom-1/4 bg-background/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-border/50 hidden lg:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-xs text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              About Juliet
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
              Dedicated to Your Optimal Performance
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Juliet St. Germain is a Doctor of Physical Therapy with over 15 years 
                of experience working with elite athletes, Silicon Valley executives, and 
                high-performing individuals who demand excellence in their care.
              </p>
              <p>
                Her approach combines cutting-edge, evidence-based techniques with a deep 
                understanding of biomechanics and human performance. She believes that every 
                patient deserves individualized attention and a treatment plan designed 
                specifically for their goals.
              </p>
              <p>
                Having worked with collegiate, professional, and Olympic-level athletes, 
                Juliet brings an elite sports medicine perspective to every patient—whether 
                you&apos;re recovering from surgery, managing chronic pain, or optimizing your 
                athletic performance.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <cred.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{cred.title}</p>
                    <p className="text-sm text-muted-foreground">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Meet Juliet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
