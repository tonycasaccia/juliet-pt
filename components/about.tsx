"use client";

import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Proof of Strength
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Grid - Best 4 images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/images/hiking-trail.jpg" 
                  alt="Team on hiking trail at Rucky Chucky" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/images/bike.jpg" 
                  alt="Juliet at cycling event with bike" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="/images/race-treatment.jpg" 
                  alt="Treatment at outdoor race event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/images/treatment-clinic.jpg" 
                  alt="Clinical treatment demonstration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Strength isn&apos;t always loud. It often looks like showing up on a hard
                day, taking the first step toward healing, or simply trusting that your
                body is capable of more than you believe.
              </p>
              <p>
                At the core of this practice is the recognition that the strength you&apos;re
                looking for is already there. Whether you&apos;re an athlete chasing a goal
                or someone simply working to feel better in your own body, we all
                deserve care that meets us where we are.
              </p>
              <p>
                My role is to walk alongside you, listen, and build a record of what
                your body can do, how it adapts, and measure how far it can go. This
                serves as evidence and proof of strength that is entirely your own.
              </p>
            </div>
            
            {/* Link to IPA */}
            <a
              href="https://instituteofphysicalart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              See more about treatment philosophy
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Aquatic Therapy Full Width Image */}
        <div className="rounded-3xl overflow-hidden">
          <img 
            src="/images/aquatic-therapy.jpg" 
            alt="Aquatic therapy session in pool" 
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
