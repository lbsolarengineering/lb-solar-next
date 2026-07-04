import Link from "next/link";
import { company, nav } from "@/lib/data";
import ThemeSwitcher from "./ThemeSwitcher";
export default function Header(){return <header className="site-header"><Link className="brand" href="/"><span className="logoBox"><img src={company.logo} alt="LB Solar logo" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/><b>LB</b></span><span><strong>{company.short}</strong><small>ENGINEERING & CONSULTANCY</small></span></Link><nav>{nav.slice(0,8).map(([n,h])=><Link key={n} href={h}>{n}</Link>)}</nav><a className="whatsapp" href={`https://wa.me/${company.whatsapp}`}>WhatsApp</a><ThemeSwitcher/></header>}
