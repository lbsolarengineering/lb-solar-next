"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ShieldCheck, Target, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { src: "/assets/hero/hero-01.jpg", alt: "Industrial rooftop solar plant with city skyline" },
  { src: "/assets/hero/hero-02.jpg", alt: "Utility-scale ground-mounted solar farm" },
  { src: "/assets/hero/hero-03.jpg", alt: "Rooftop solar arrays on an industrial building" },
  { src: "/assets/hero/hero-04.jpg", alt: "Industrial rooftop solar plant installation" },
  { src: "/assets/hero/hero-05.jpg", alt: "Commercial solar installation with modern panels" },
  { src: "/assets/hero/hero-06.jpg", alt: "Ground-mount solar plant site view" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="heroMedia" aria-hidden="true">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={i === index ? "slide active" : "slide"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding={i === 0 ? "sync" : "async"}
          />
        ))}
      </div>
      <div className="heroOverlay" />
      <div className="heroContent">
        <span className="eyebrow">Engineering Solar Projects</span>
        <h1>
          Designed for <em>Performance.</em>
          <br />
          Engineered for <em>Longevity.</em>
        </h1>
        <p>
          Independent solar design, detailed engineering and technical consultancy for EPC companies,
          developers, industries and project owners across India.
        </p>
        <div className="heroTrust">
          <span>
            <Wrench /> Practical Engineering
          </span>
          <span>
            <Target /> Technical Accuracy
          </span>
          <span>
            <ShieldCheck /> Client Confidentiality
          </span>
        </div>
        <div className="heroActions">
          <Link className="button buttonPrimary" href="/services">
            Explore Our Services
          </Link>
          <Link className="button buttonGhost" href="/projects">
            View Our Projects
          </Link>
        </div>
      </div>
      <button
        className="sliderArrow left"
        onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft />
      </button>
      <button
        className="sliderArrow right"
        onClick={() => setIndex((index + 1) % slides.length)}
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight />
      </button>
      <div className="sliderDots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
