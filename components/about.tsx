"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type AboutImage = {
  src: string;
  alt: string;
  aspect: string;
};

const images: AboutImage[] = [
  {
    src: "/images/about-classroom.jpg",
    alt: "Juliet teaching in a clinical classroom setting",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/about-bike.jpg",
    alt: "Juliet at a cycling event with her bike",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/about-colleagues.jpg",
    alt: "Juliet with physical therapy colleagues",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/about-race.jpg",
    alt: "Providing treatment at an outdoor race event",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/about-treatment.jpg",
    alt: "Hands-on clinical treatment demonstration",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/about-bikeshop.jpg",
    alt: "Bike fit assessment at a cycling shop",
    aspect: "aspect-[3/4]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ParallaxImage({
  image,
  range = 40,
}: {
  image: AboutImage;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative overflow-hidden rounded-3xl shadow-lg shadow-foreground/5 ${image.aspect}`}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover -top-[10%]"
        loading="lazy"
      />
    </motion.div>
  );
}

function ImageMosaic() {
  // Split into two columns; right column is offset for an editorial stagger
  const left = [images[0], images[1], images[4]];
  const right = [images[2], images[3], images[5]];

  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      <div className="flex flex-col gap-4 lg:gap-6">
        {left.map((image) => (
          <ParallaxImage key={image.src} image={image} range={30} />
        ))}
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 pt-12 lg:pt-20">
        {right.map((image) => (
          <ParallaxImage key={image.src} image={image} range={50} />
        ))}
      </div>
    </div>
  );
}

function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.scrollWidth / images.length;
    const index = Math.round(track.scrollLeft / slideWidth);
    setActive(Math.min(Math.max(index, 0), images.length - 1));
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.scrollWidth / images.length;
    track.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((image) => (
          <div
            key={image.src}
            className="snap-center shrink-0 w-[85%] first:ml-0"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lg shadow-foreground/10">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="mt-5 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-6 bg-primary"
                : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12 lg:mb-20"
        >
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Proof of Strength
          </h2>
        </motion.div>

        {/* Mobile: carousel above copy */}
        <div className="lg:hidden mb-10">
          <MobileCarousel />
        </div>

        {/* Desktop: mosaic left, sticky copy right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="hidden lg:block">
            <ImageMosaic />
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p className="text-lg lg:text-xl text-foreground/90 font-serif">
                Strength isn&apos;t always loud. It looks like showing up on a
                hard day, taking the first step toward healing, or simply
                trusting that your body is capable of more than you believe.
              </p>
              <p className="text-lg">
                At the core of this practice is the recognition that the
                strength you&apos;re looking for is already there. Whether
                you&apos;re an athlete chasing a goal or someone simply working
                to feel better in your own body, we all deserve care that meets
                us where we are.
              </p>
              <p className="text-lg">
                My role is to walk alongside you, listen, and build a record of
                what your body can do, how it adapts, and measure how far it can
                go. This serves as evidence and proof of strength that is
                entirely your own.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
