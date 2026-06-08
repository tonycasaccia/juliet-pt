"use client";

import Link from "next/link";
import {
  Building2,
  Home,
  Video,
  Sparkles,
  Waves,
  ArrowRight,
  Activity,
  Scan,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "In Clinic",
    description:
      "One-on-one hour-long sessions at our home base clinic in Palo Alto. Fully individualized treatment focusing on restoring function, reducing pain, and improving movement quality.",
    href: "/services/in-clinic",
  },
  {
    icon: Waves,
    title: "Aquatic Therapy",
    description:
      "Specialized aquatic physical therapy at Burgess Pool combining advanced rehabilitation with the therapeutic properties of water. Thursdays 9-10 AM.",
    href: "/services/aquatic-therapy",
  },
   {
    icon: Scan,
    title: "Complete Mobility Screening",
    descriptionHtml: true,
    description:
      'Movement as a measure of longevity. How well you move today is one of the strongest indicators of how well you\'ll live tomorrow. A comprehensive assessment of the mobility measures shown by research to be essential for daily life, recreation, and sport.',
      href: "https://saintgermainphysicaltherapy.janeapp.com/#staff_member/1",
      external: true,
  },
  {
    icon: Home,
    title: "Home Visits",
    description:
      "One-on-one hour-long sessions in the comfort of your own home. Perfect for those with busy schedules or mobility restrictions.",
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
    descriptionHtml: true,
    description:
      'Premium personalized care tailored to your unique needs. Please <a href="mailto:saintgermainphysicaltherapy@gmail.com" class="text-primary hover:underline">email</a> or <a href="tel:5052498284" class="text-primary hover:underline">text</a> for more information about this exclusive service.',
  },
  {
    icon: Activity,
    title: "Performance & Training",
    description:
      "Expert assessment and treatment for athletes and active individuals. Includes run assessment, bike assessment, swim assessment, and gait assessment to optimize your performance.",
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
            Comprehensive Care in Every Stage Meeting You Where You Are
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const CardWrapper = service.href ? Link : "div";
            const cardProps = service.href
  ? {
      href: service.href,
      target: service.external ? "_blank" : undefined,
      rel: service.external ? "noopener noreferrer" : undefined,
    }
  : {};
            
            return (
              <CardWrapper
                key={service.title}
                {...cardProps}
                className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 block"
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
                {service.descriptionHtml ? (
                  <p 
                    className="text-sm text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                )}

                {/* Learn more indicator for linked services - grows the card on hover */}
                {service.href && (
                  <div className="flex items-center gap-1 text-sm font-medium text-primary max-h-0 opacity-0 overflow-hidden group-hover:max-h-10 group-hover:mt-4 group-hover:opacity-100 transition-all duration-300">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}

                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
