"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MeetJuliet() {
  return (
    <section id="meet-juliet" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-lg">
              <img 
                src="/images/juliet-headshot.JPG" 
                alt="Juliet St. Germain at a swimming pool" 
                className="w-full h-full object-cover"
              />
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
              Juliet holds a Doctorate in Physical Therapy from Northern Arizona University and is a Certified Functional Manual Therapist—specializing in an integrative whole-systems approach that addresses the root cause of dysfunction, not just the symptoms.
              She works with athletes and non-athletes from recreational to Olympic level across cycling, running, swimming, triathlon, and more. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              She is published in research involving periodization training for hypertrophy, resistance training volume for hypertrophy, the physiological effects of mask wearing during exercise, and plans to remain actively involved in clinical research & presentation pertaining to such.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Button asChild className="rounded-full">
                <Link href="/about">
                  Learn more about Juliet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="https://juliet-pt.netlify.app/cv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
              >
                View Full CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
