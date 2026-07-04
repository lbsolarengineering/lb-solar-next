import Link from 'next/link';
import { company } from '@/lib/data';
export default function CTA(){return <section className="cta"><span>Planning a solar project?</span><h2>Verify, design, optimize and execute your project with proper engineering.</h2><div><Link href="/enquiry">Send Enquiry</Link><a href={`https://wa.me/${company.whatsapp}`}>WhatsApp Us</a></div></section>}
