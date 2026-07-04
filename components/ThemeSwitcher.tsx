'use client';
import { useEffect, useState } from 'react';
const themes = [
  ['engineering','Engineering Green','Professional • Clean • Modern'],
  ['ocean','Ocean Blue','Trust • Reliable • Corporate'],
  ['gold','Solar Gold','Energy • Bright • Dynamic'],
  ['navy','Deep Navy','Premium • Executive • Bold'],
  ['carbon','Carbon Black','Sleek • High Contrast • Modern'],
  ['sunset','Sunset Orange','Vibrant • Warm • Energetic'],
  ['forest','Forest Dark','Natural • Calm • Sustainable'],
  ['light','Light Mode','Clean • Minimal • Professional']
] as const;
export default function ThemeSwitcher(){
  const [open,setOpen]=useState(false);
  const [theme,setTheme]=useState('engineering');
  useEffect(()=>{const saved=localStorage.getItem('lb-theme')||'engineering'; setTheme(saved); document.documentElement.setAttribute('data-theme',saved)},[]);
  function change(t:string){setTheme(t); localStorage.setItem('lb-theme',t); document.documentElement.setAttribute('data-theme',t); setOpen(false)}
  return <div className="themeWrap"><button className="themeBtn" onClick={()=>setOpen(!open)}>◉ Theme⌄</button>{open&&<div className="themePanel"><b>Choose Theme</b>{themes.map(([id,name,desc])=><button key={id} onClick={()=>change(id)} className={theme===id?'active':''}><span className={`swatch ${id}`}></span><span><strong>{name}</strong><small>{desc}</small></span>{theme===id&&<em>✓</em>}</button>)}<div className="themeNote">Use Engineering Green for final public launch.</div></div>}</div>
}
