import PageHero from "@/components/PageHero";
import { company } from "@/lib/data";
export const metadata={title:"Contact"};
export default function Contact(){return <><PageHero eyebrow="Contact" title="Connect with LB Solar Engineering & Consultancy." text="For design enquiries, technical reviews, consultancy requirements and project discussions."/><section className="contentWrap contactGrid"><article><h2>Call</h2><a href={`tel:${company.phone.replace(/\s/g,"")}`}>{company.phone}</a></article><article><h2>Email</h2><a href={`mailto:${company.email}`}>{company.email}</a></article><article><h2>Office</h2><p>{company.address}</p></article><article><h2>Website</h2><a href={`https://${company.domain}`}>{company.domain}</a></article></section></>}
