"use client";

import { Dumbbell, Waves, TreePine, Building2, Check } from "lucide-react";

const amenities = [
  "Free Client Parking",
  "Complimentary Towel Service",
  "Post-Session Recovery Lounge",
  "Filtered Water Stations",
  "Private Changing Rooms",
  "Climate-Controlled Spaces",
  "Foam Rollers & Recovery Tools",
  "Sanitized Equipment",
  "Wheelchair Accessible",
  "Flexible Scheduling",
  "Online Booking Portal",
  "Insurance Coordination",
];

const facilities = [
  {
    id: "gym",
    title: "State-of-the-Art Gym",
    description:
      "Fully equipped rehabilitation gym with specialized equipment for strength training, mobility work, and functional movement patterns.",
    icon: Dumbbell,
    size: "large",
  },
  {
    id: "aquatic",
    title: "Aquatic Therapy Center",
    description:
      "Therapeutic pool at Burgess Pool for low-impact rehabilitation and aquatic exercise programs.",
    icon: Waves,
    size: "medium",
  },
  {
    id: "turf",
    title: "Indoor Turf Area",
    description:
      "Sport-specific training surface for agility drills, return-to-sport protocols, and dynamic movement training.",
    icon: TreePine,
    size: "medium",
  },
  {
    id: "clinic",
    title: "Private Treatment Rooms",
    description:
      "Comfortable, private spaces for one-on-one manual therapy, dry needling, and personalized care.",
    icon: Building2,
    size: "small",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            Our Facilities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Train and recover in premium facilities designed to support every
            stage of your rehabilitation and performance journey.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Card - Gym (spans 2 columns on lg) */}
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full bg-gradient-to-br from-[#e8f5f0] via-[#d4eef5] to-[#e0e8f5] relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Dumbbell className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-primary-foreground">
                    State-of-the-Art Gym
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-sm lg:text-base max-w-xl">
                  Fully equipped rehabilitation gym with specialized equipment
                  for strength training, mobility work, and functional movement
                  patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Medium Card - Aquatic */}
          <div className="group relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#e0f0f5] via-[#d8e8f2] to-[#e5eef8] relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Waves className="h-5 w-5 text-primary-foreground" />
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    Aquatic Therapy
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Therapeutic pool for low-impact rehabilitation and aquatic
                  programs.
                </p>
              </div>
            </div>
          </div>

          {/* Medium Card - Turf */}
          <div className="group relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#e5f2ed] via-[#dceef3] to-[#e8f0f5] relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TreePine className="h-5 w-5 text-primary-foreground" />
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    Indoor Turf
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Sport-specific training surface for agility and dynamic
                  movement.
                </p>
              </div>
            </div>
          </div>

          {/* Wide Card - Treatment Rooms (spans full width on mobile, 2 cols on md, 1 on lg) */}
          <div className="md:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-3xl">
            <div className="aspect-[16/9] md:aspect-[21/9] lg:aspect-[4/3] w-full bg-gradient-to-br from-[#e2f3f0] via-[#daeef5] to-[#e5f0f2] relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    Private Treatment Rooms
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Comfortable, private spaces for one-on-one manual therapy and
                  personalized care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities List */}
        <div className="mt-16 bg-background rounded-3xl p-8 lg:p-12 border border-border">
          <h3 className="font-serif text-2xl font-medium text-foreground mb-8 text-center">
            Included Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature List */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
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
