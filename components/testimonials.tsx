"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "After struggling with hip and back pain for over two years and seeing multiple doctors without answers, I finally found Juliet. She immediately made me feel heard, safe, and confident we could get to the root cause. Thanks to her care, I'm finally back to biking and doing the activities I love again.",
    name: "Sascha K",
    title: "Engineer, Dexcom",
    rating: 5,
  },
  {
    quote:
      "As a competitive triathlete, I need a PT who understands elite performance. Juliet's expertise and personalized approach got me back to racing faster than I ever expected.",
    name: "Sarah Martinez",
    title: "Professional Triathlete",
    rating: 5,
  },
  {
    quote:
      "The level of care and attention is exceptional. Juliet takes the time to truly understand your goals and creates a plan that works for your life.",
    name: "David Park",
    title: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "After my ACL surgery, I was terrified I'd never play at the same level again. Juliet's return-to-sport program gave me the confidence and strength to come back better.",
    name: "Emily Thompson",
    title: "Collegiate Soccer Player",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from the athletes, executives, and high-performers who have 
            transformed their health with our care.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 lg:p-10 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
