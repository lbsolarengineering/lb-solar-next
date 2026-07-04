import Link from 'next/link';
import { company, nav } from '@/lib/data';
import ThemeSwitcher from './ThemeSwitcher';
export default function Header(){return <header className="siteHeader"><Link className="brand" href="/"><img src={company.logo} alt="LB Solar Engineering & Consultancy"/><span className="brandText"><b>LB Solar</b><small>ENGINEERING & CONSULTANCY</small></span></Link><nav>{nav.map(([n,h])=><Link key={n} href={h}>{n}</Link>)}</nav><a className="whatsapp" href={`https://wa.me/${company.whatsapp}`}>WhatsApp</a><ThemeSwitcher/></header>}
