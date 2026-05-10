"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const features = [
  "Free 15-minute consultation",
  "Same-week availability",
  "Easy online scheduling",
];

export function BookingCTA() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary mb-8">
            <Calendar className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-balance">
            Ready to Move Better and Perform Stronger?
          </h2>

          <p className="text-lg text-background/70 mb-8 leading-relaxed">
            Take the first step toward optimal performance. Book your appointment 
            today and experience the difference of truly personalized care.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-background/80"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg font-medium shadow-lg shadow-primary/25"
            >
              Book an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-lg font-medium border-2 border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              Call: (650) 555-0123
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
