"use client";
import { useEffect, useState } from "react";
const themes = [
  ["engineering", "Engineering Premium"],
  ["corporate", "White Corporate"],
  ["luxury", "Black Luxury"],
  ["glass", "Modern Glass"],
];
export default function ThemeSwitcher(){
  const [theme,setTheme] = useState("engineering");
  useEffect(()=>{ const saved = localStorage.getItem("lb-theme") || "engineering"; setTheme(saved); document.documentElement.dataset.theme = saved; },[]);
  const change=(t:string)=>{ setTheme(t); localStorage.setItem("lb-theme",t); document.documentElement.dataset.theme=t; };
  return <div className="theme-switcher" aria-label="Theme selector">{themes.map(([id,label])=><button key={id} onClick={()=>change(id)} className={theme===id?"active":""}>{label}</button>)}</div>
}
