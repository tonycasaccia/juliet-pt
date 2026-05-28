"use client";

import {
  Building2,
  Home,
  Video,
  Sparkles,
  Waves,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "In Clinic",
    description:
      "One-on-one hour-long sessions at our home base clinic in Palo Alto. Fully individualized treatment focusing on restoring function, reducing pain, and improving movement quality.",
  },
  {
    icon: Home,
    title: "Home Visits",
    description:
      "One-on-one hour-long sessions in the comfort of your own home. Perfect for those with mobility limitations or busy schedules.",
  },
  {
    icon: Video,
    title: "Virtual Sessions",
    description:
      "One-on-one hour-long sessions virtually. Convenient access to expert care from anywhere.",
  },
  {
    icon: Sparkles,
    title: "Concierge",
    description:
      "Premium personalized care tailored to your unique needs. Please email directly for more information about this exclusive service.",
  },
  {
    icon: Waves,
    title: "Aquatic Therapy",
    description:
      "Specialized aquatic physical therapy at Burgess Pool combining advanced rehabilitation with the therapeutic properties of water. Thursdays 9-10 AM.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Comprehensive Care for Every Stage of Your Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From injury rehabilitation to performance optimization, we offer 
            a full spectrum of services tailored to your unique needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
