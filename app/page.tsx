import Link from "next/link";
import {
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Gauge,
  Lightbulb,
  Map,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { process, projects, services, stats } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="statsSection" aria-label="Company statistics">
        <div className="statsGrid">
          {stats.map((stat) => (
            <article className="statCard" key={stat.title}>
              <strong>{stat.value}</strong>
              <h3>{stat.title}</h3>
              <p>{stat.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <Section
        eyebrow="About LB Solar"
        title="Engineering clarity. Execution confidence."
        intro="We help project stakeholders move beyond thumb rules through practical, optimized and execution-ready solar engineering."
      >
        <div className="aboutGrid">
          <div>
            <p className="lead">
              LB Solar Engineering & Consultancy was established to address a common challenge in the
              Indian solar industry: projects being designed either through thumb rules or with
              unnecessary over-engineering.
            </p>
            <p>
              Our objective is to help clients build reliable, optimized and commercially sensible
              solar projects designed to perform for 25–30 years.
            </p>
            <Link className="textLink" href="/about">
              Know more about LB Solar →
            </Link>
          </div>
          <div className="valueStack">
            <div>
              <Lightbulb />
              <b>Vision</b>
              <span>Become a trusted engineering consultancy for technically reliable solar projects.</span>
            </div>
            <div>
              <Target />
              <b>Mission</b>
              <span>Deliver accurate, optimized and execution-friendly engineering solutions.</span>
            </div>
            <div>
              <ShieldCheck />
              <b>Commitment</b>
              <span>Quality in design, integrity in process and performance over decades.</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Solar engineering and consultancy services."
        intro="From fast pre-sales engineering to utility-scale detailed design and independent project verification."
      >
        <div className="cardGrid">
          {services.map((s, i) => {
            const ServiceIcon = [Wrench, Gauge, Map, Compass, ClipboardCheck, CheckCircle2][i % 6];
            return (
              <article className="serviceCard" key={s.title}>
                <ServiceIcon size={28} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            );
          })}
        </div>
        <div className="center">
          <Link className="button buttonPrimary" href="/services">
            Explore All Services
          </Link>
        </div>
      </Section>

      <section className="innovationStrip">
        <div className="innovationCopy">
          <span className="eyebrow light">Innovation</span>
          <h2>Engineering Beyond Today</h2>
          <p className="innovationSub">
            Building advanced digital engineering solutions for the future of the solar industry.
          </p>
          <p>
            At LB Solar Engineering &amp; Consultancy, we continuously invest in engineering
            innovation to simplify complex solar design workflows, improve technical accuracy and
            accelerate project delivery. Our focus is on developing next-generation digital solutions
            that support EPC companies, developers and project owners without compromising engineering
            quality.
          </p>
          <span className="innovationStatus">
            <Sparkles size={16} />
            Innovation in Progress
          </span>
        </div>
      </section>

      <Section
        eyebrow="Our Projects"
        title="Engineering portfolio highlights."
        intro="A curated selection of ground-mount detailed design, rooftop detailed design and proposal engineering work."
      >
        <div className="projectGrid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <div className="center">
          <Link className="button buttonOutline" href="/projects">
            View All Projects
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="From enquiry to performance review."
        intro="A clear, stage-gated engineering workflow that keeps every decision visible, coordinated and execution-ready."
        className="processSection"
      >
        <div className="processFlow">
          {process.map((p, i) => {
            const step = i + 1;
            const showArrow = step % 4 !== 0 && step < process.length;
            return (
              <article key={p} className="processStep">
                <div className="stepMarker">
                  <span>{String(step).padStart(2, "0")}</span>
                </div>
                <div className="stepContent">
                  <small>Step {step}</small>
                  <h3>{p}</h3>
                </div>
                {showArrow && (
                  <div className="flowArrow" aria-hidden="true">
                    →
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Section>

      <section className="cta">
        <div>
          <span className="eyebrow light">Planning a solar project?</span>
          <h2>Start with technically clear, execution-ready engineering.</h2>
        </div>
        <Link className="button buttonLight" href="/enquiry">
          Send Project Enquiry
        </Link>
      </section>
    </>
  );
}
