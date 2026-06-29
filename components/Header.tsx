import Link from "next/link";
import { company } from "@/lib/data";
const nav = [["Home","/"],["About","/about"],["Services","/services"],["Projects","/projects"],["Career","/career"],["Enquiry","/enquiry"],["Contact","/contact"]];
export default function Header(){return <header className="site-header"><Link href="/" className="brand"><div className="mark">LB</div><div><b>{company.brand}</b><span>Engineering & Consultancy</span></div></Link><nav>{nav.map(([n,h])=><Link key={n} href={h}>{n}</Link>)}</nav><a className="nav-cta" href={company.whatsapp}>WhatsApp</a></header>}
