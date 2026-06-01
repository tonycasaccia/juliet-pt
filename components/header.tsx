"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
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
    description: "One-on-one hour-long sessions at our Palo Alto clinic.",
    href: "/services/in-clinic",
  },
  {
    icon: Home,
    title: "Home Visits",
    description: "One-on-one sessions in the comfort of your own home.",
    href: "#services",
  },
  {
    icon: Video,
    title: "Virtual",
    description: "One-on-one hour-long sessions virtually.",
    href: "#services",
  },
  {
    icon: Sparkles,
    title: "Concierge",
    description: "Personalized premium care. Email for details.",
    href: "#services",
  },
  {
    icon: Waves,
    title: "Aquatic Therapy",
    description: "Specialized aquatic rehabilitation at Burgess Pool.",
    href: "#services",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#meet-juliet", label: "Meet Juliet" },
  { href: "#facilities", label: "Facilities" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center py-3">
            <img 
              src="/images/logo.png" 
              alt="Saint Germain Physical Therapy" 
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <a
                href="#services"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </a>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-[480px] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl p-6">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/80 transition-colors group/item"
                      >
                        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">
                            {service.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="flex flex-col px-4 py-6 gap-2">
            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full text-base font-medium text-foreground py-2"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                  {services.map((service) => (
                    <a
                      key={service.title}
                      href={service.href}
                      className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <service.icon className="h-4 w-4 text-primary" />
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-4"
            >
              Book an Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
