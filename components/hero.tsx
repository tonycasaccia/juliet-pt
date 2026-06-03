"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 102 255 / 0.1) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now accepting new patients
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-foreground leading-tight text-balance">
              The Bay Area's
              <span className="text-primary">Premier Physical Therapy</span>
               Practice
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Personalized, evidence-based physical therapy and sports rehabilitation 
              helping you move well &amp; feel strong.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <a href="https://saintgermainphysicaltherapy.janeapp.com" target="_blank" rel="noopener noreferrer">
                  Book an Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px]">
            <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src="/images/hero-runner.jpg" 
                alt="Runner in motion" 
                className="w-full h-full object-cover"
              />
              {/* Glassmorphism card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Trusted by Elite Athletes
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Collegiate, professional &amp; Olympic level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
