import { ReactNode } from "react";
export default function Section({eyebrow,title,intro,children,className=""}:{eyebrow?:string,title:string,intro?:string,children:ReactNode,className?:string}){return <section className={`section ${className}`}><div className="sectionHead">{eyebrow&&<span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{intro&&<p>{intro}</p>}</div>{children}</section>}
