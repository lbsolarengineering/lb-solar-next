import BlogClient from "./BlogClient";

export const metadata = {
  title: {
    absolute: "Solar Engineering Blog | LB Solar Engineering & Consultancy",
  },
  description:
    "Read practical articles on solar design, PVsyst, electrical engineering, structures, regulations, project execution and solar industry developments.",
  openGraph: {
    title: "Solar Engineering Blog | LB Solar Engineering & Consultancy",
    description:
      "Read practical articles on solar design, PVsyst, electrical engineering, structures, regulations, project execution and solar industry developments.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
