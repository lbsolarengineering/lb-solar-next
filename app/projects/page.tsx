import Image from "next/image";
import PageHero from "@/components/PageHero";
import { extractCapacity, projectGroups } from "@/lib/data";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Portfolio"
        title="Proposal and detailed solar design work."
        text="A categorized selection of LB Solar ground-mount, rooftop and proposal engineering designs."
      />
      <section className="contentWrap projectPortfolio">
        {projectGroups.map((group) => (
          <div className="portfolioGroup" key={group.title}>
            <div className="portfolioHeading">
              <h2>{group.title}</h2>
              <span>{group.projects.length} Designs</span>
            </div>
            <div className="portfolioGrid">
              {group.projects.map(([title, image]) => {
                const capacity = extractCapacity(title);
                return (
                  <article className="portfolioCard" key={title}>
                    <div className="portfolioImage">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        className="portfolioCardImg"
                      />
                      <div className="projectBadges">
                        <span className="projectBadge category">{group.badge}</span>
                        {capacity ? <span className="projectBadge capacity">{capacity}</span> : null}
                      </div>
                    </div>
                    <div className="portfolioBody">
                      <h3>{title}</h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
