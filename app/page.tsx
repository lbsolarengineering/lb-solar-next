import Link from "next/link";
import {
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  Gauge,
  Lightbulb,
  Map,
  ShieldCheck,
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

      <section className="aiStrip">
        <div>
          <span className="eyebrow light">Next-Generation Platform</span>
          <h2>
            LB Solar AI <small>Coming Soon</small>
          </h2>
          <p>
            An AI-assisted solar engineering platform being developed to help EPC companies and solar
            professionals prepare project concepts, engineering inputs and client proposals faster.
          </p>
        </div>
        <div className="aiFeatures">
          <span>
            <FileText /> Proposal Automation
          </span>
          <span>
            <Gauge /> System Sizing
          </span>
          <span>
            <Map /> Layout Assistance
          </span>
          <span>
            <Bot /> AI Engineering Assistant
          </span>
        </div>
        <Link className="button buttonLight" href="/lb-solar-ai">
          Explore LB Solar AI
        </Link>
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
          {process.map((p, i) => (
            <article key={p} className="processStep">
              <div className="stepMarker">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="stepContent">
                <small>Step {i + 1}</small>
                <h3>{p}</h3>
              </div>
              {i < process.length - 1 && (
                <div className="flowArrow" aria-hidden="true">
                  →
                </div>
              )}
            </article>
          ))}
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
