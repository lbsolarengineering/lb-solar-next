import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";
export const metadata={title:"Services"};
export default function Services(){return <><PageHero eyebrow="Services" title="Engineering support from project concept to performance review." text="Flexible consultancy services for EPC companies, developers, industries, owners, vendors and project stakeholders."/><section className="contentWrap"><div className="serviceList">{services.map((s,i)=><article key={s.title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{s.title}</h2><p>{s.text}</p></div></article>)}</div></section></>}
