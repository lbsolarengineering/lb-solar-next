"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";
import { blogArticles, blogCategories } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogClient() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return blogArticles;
    return blogArticles.filter((a) => a.category === active);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Solar Engineering Insights"
        text="Technical knowledge, practical guidance and industry developments for solar professionals."
      />

      <section className="contentWrap blogPage">
        <div className="blogFilters" role="tablist" aria-label="Blog categories">
          <button
            type="button"
            className={active === "All" ? "active" : ""}
            onClick={() => setActive("All")}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blogGrid">
          {filtered.map((article) => (
            <article className="blogCard" key={article.slug} id={article.slug}>
              <div className="blogCardImage">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  className="blogCardImg"
                />
              </div>
              <div className="blogCardBody">
                <span className="blogCategory">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="blogMeta">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span>{article.readingTime}</span>
                </div>
                <Link className="button buttonOutline blogReadBtn" href={`#${article.slug}`}>
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="blogEmpty">No articles in this category yet. Check back soon.</p>
        )}
      </section>
    </>
  );
}
