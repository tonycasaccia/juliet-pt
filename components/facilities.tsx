"use client";

import { Dumbbell, Waves, TreePine, Building2 } from "lucide-react";

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            Where We Work
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Our Facilities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Train and recover in premium facilities designed to support every stage of your rehabilitation and performance journey.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Gym */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/amenity-gym.jpg"
                alt="State-of-the-Art Gym"
                className="h-[320px] w-full object-cover rounded-3xl"
              />
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
  <Dumbbell className="h-6 w-6 text-primary" />
</div>
                <div>
                  <p className="font-semibold text-foreground">
                    State-of-the-Art Gym
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Strength training, mobility work, and functional movement patterns in a fully equipped rehab environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pool */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/amenity-pool-opt.jpg"
                alt="Outdoor Pool"
                className="h-[320px] w-full object-cover rounded-3xl"
              />
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Outdoor Pool
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Low-impact rehabilitation and swim performance assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Turf */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/amenity-turf.jpg"
                alt="Outdoor Turf"
                className="h-[320px] w-full object-cover rounded-3xl"
              />
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Outdoor Turf
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Agility training, return-to-sport prep, and dynamic movement work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Room */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/amenity-recovery.jpg"
                alt="Recovery Room"
                className="h-[320px] w-full object-cover rounded-3xl"
              />
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                  Recovery Room
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A quiet private space to rest, reset, and optimize recovery with Normatec, red light therapy, and massage tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom feature row */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Palo Alto Location
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Easy Parking
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ADA Accessible
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Modern Equipment
          </span>
        </div>

      </div>
    </section>
  );
}