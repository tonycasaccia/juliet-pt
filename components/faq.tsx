"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive evaluation lasting about 60 minutes. We'll discuss your history, goals, and concerns, then perform a thorough physical examination. You'll leave with a clear understanding of your condition and a personalized treatment plan.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with most major insurance providers. We recommend contacting your insurance company to verify your physical therapy benefits. Our team can also assist with insurance verification and provide the necessary documentation for reimbursement.",
  },
  {
    question: "How long will my recovery take?",
    answer:
      "Recovery time varies based on your specific condition, goals, and how consistently you follow your treatment plan. During your evaluation, we'll provide a realistic timeline and milestones. Many patients see significant improvement within 4-8 weeks.",
  },
  {
    question: "What makes your approach different from other physical therapists?",
    answer:
      "Every session is one-on-one with Dr. St. Germain—no aides, no shared attention. Combined with 15+ years of experience with elite athletes and evidence-based techniques, you receive truly personalized, expert-level care throughout your entire treatment.",
  },
  {
    question: "Do I need a referral from a doctor?",
    answer:
      "California allows direct access to physical therapy, meaning you can schedule an appointment without a physician referral. However, some insurance plans may require a referral for coverage, so we recommend checking with your provider.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We treat a wide range of conditions including sports injuries, post-surgical rehabilitation, chronic pain, mobility limitations, back and neck pain, joint problems, and performance optimization for athletes. If you're unsure if we can help, reach out for a free consultation.",
  },
  {
    question: "How often will I need to come in for treatment?",
    answer:
      "Treatment frequency depends on your condition and goals. Most patients begin with 2-3 sessions per week, transitioning to less frequent visits as they progress. We'll adjust your plan based on your response to treatment and schedule constraints.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer telehealth options for certain conditions and follow-up appointments. This can be especially convenient for busy professionals or when in-person visits aren't possible. Contact us to see if telehealth is appropriate for your situation.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Find answers to common questions about our services and what to expect.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl px-6 data-[state=open]:bg-secondary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
