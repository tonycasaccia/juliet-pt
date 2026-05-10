"use client";

import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "Physical Therapy",
  "Sports Rehabilitation",
  "Performance Optimization",
  "Injury Prevention",
  "Return-to-Sport Training",
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-background/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Juliet St. Germain</h3>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Elite physical therapy and sports rehabilitation for Silicon Valley&apos;s 
              high-performers.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Book an Appointment
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/60 text-sm">
                  123 Innovation Way<br />
                  Palo Alto, CA 94301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+16505550123"
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  (650) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@julietstgermain.com"
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  info@julietstgermain.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/60 text-sm">
                  Mon - Fri: 7am - 7pm<br />
                  Sat: 8am - 2pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Juliet St. Germain, DPT. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-background/60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
