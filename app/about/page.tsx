import Image from "next/image";
import { CheckCircle2, Compass, Quote, ShieldCheck, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "Learn about LB Solar Engineering & Consultancy — practical solar design, technical clarity and execution-focused engineering consultancy.",
};

const storyHighlights = [
  "Engineering-First Approach",
  "Practical Project Experience",
  "Independent Technical Consultancy",
  "Long-Term Plant Reliability",
];

const founderExpertise = [
  "Solar Engineering Since 2020",
  "Rooftop & Utility-Scale Experience",
  "Engineering and Execution Focus",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About LB Solar"
        title="Engineering clarity for solar projects built to last."
        text="A practical, independent and execution-focused solar engineering consultancy."
      />

      <section className="contentWrap aboutLaunch">
        <section className="storyPremium">
          <aside className="storyBrandPanel">
            <div className="storyBrandAccent" aria-hidden="true" />
            <Image
              src={company.logo}
              alt="LB Solar Engineering & Consultancy"
              width={168}
              height={52}
              className="storyBrandLogo"
              priority
            />
            <h2 className="storyBrandName">LB Solar Engineering &amp; Consultancy</h2>
            <p className="storyBrandSupport">
              Independent Solar Design, Engineering &amp; Technical Consultancy
            </p>
          </aside>

          <div className="storyContent">
            <span className="eyebrow">Our Story</span>
            <h2>Engineering Solar Projects with Clarity, Accuracy and Purpose</h2>
            <p>
              LB Solar Engineering &amp; Consultancy was established to address a common challenge in
              the Indian solar industry: projects being designed either through generalized thumb
              rules or with unnecessary over-engineering.
            </p>
            <p>
              Through close involvement with EPC companies, developers and project execution teams,
              we observed that incomplete technical understanding often resulted in higher costs,
              installation difficulties, safety concerns and underperforming systems.
            </p>
            <p>
              LB Solar brings practical engineering, technical clarity and execution-focused
              consultancy to every stage of solar project development. Our objective is to help
              clients build reliable, optimized and commercially sensible solar projects designed to
              perform for 25–30 years.
            </p>

            <div className="storyHighlights">
              {storyHighlights.map((item) => (
                <div key={item}>
                  <CheckCircle2 strokeWidth={2.25} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="vmcGrid premiumVmc">
          <article>
            <Compass />
            <h3>Vision</h3>
            <p>
              To become a trusted solar engineering consultancy known for practical, technically
              reliable and long-term solutions.
            </p>
          </article>
          <article>
            <Target />
            <h3>Mission</h3>
            <p>
              To deliver accurate, optimized and execution-friendly engineering that improves project
              value and reduces avoidable risk.
            </p>
          </article>
          <article>
            <ShieldCheck />
            <h3>Commitment</h3>
            <p>
              Quality in design, integrity in process, client confidentiality and plant performance
              over decades.
            </p>
          </article>
        </div>

        <section className="founderPremium">
          <div className="founderMedia">
            <div className="founderPortraitWrap">
              <Image
                src={company.founderImage}
                alt={`${company.founder}, ${company.founderTitle}`}
                fill
                sizes="(max-width: 900px) 100vw, 300px"
                className="founderPhoto"
                priority
              />
            </div>
            <div className="founderIdentityCard">
              <strong>{company.founder}</strong>
              <span>{company.founderTitle}</span>
            </div>
          </div>

          <div className="founderCopy">
            <span className="eyebrow">Founder&apos;s Note</span>
            <h2>Engineering Experience Built Around Real Project Challenges</h2>
            <p className="founderIntro">
              Upendra Singh Rathore is a mechanical engineer and solar design professional with
              industry experience since January 2020. His work spans proposal engineering, detailed
              design, system optimization, technical consultancy and execution support for rooftop and
              utility-scale solar projects.
            </p>
            <p>
              Through years of working closely with EPC companies, developers, vendors and site
              execution teams, he identified a recurring gap between theoretical design and practical
              implementation. LB Solar Engineering &amp; Consultancy was founded to bridge that gap by
              providing technically sound, commercially practical and execution-oriented engineering
              solutions.
            </p>
            <p>
              His approach is based on understanding the complete project lifecycle—from feasibility
              and energy assessment to layouts, electrical calculations, structural coordination,
              procurement support and commissioning assistance.
            </p>

            <div className="founderQuote">
              <Quote />
              <blockquote>
                “Every successful solar project begins with the right engineering. Our responsibility
                is not only to prepare drawings, but to ensure that every design can be safely
                executed, commercially justified and relied upon for decades.”
              </blockquote>
            </div>

            <div className="founderExpertise">
              {founderExpertise.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
