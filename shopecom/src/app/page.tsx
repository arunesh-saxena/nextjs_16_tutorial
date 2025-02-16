import Link from "next/link";

const navList =[
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/feature", label: "Docs>Feature" },
  { href: "/docs/feature/1", label: "Docs>Feature>1" },
  { href: "/products", label: "Products" },
  { href: "/profile", label: "Profile" },
  
  { href: "/login", label: "Login" },
  { href: "/articles/breaking-news-123?lang=en", label: "Article in English" },
  { href: "/articles/breaking-news-123?lang=fr", label: "Article in French" },

];

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {navList.map((route) => (
        <li key={route.href}>
          <Link href={route.href}>{route.label}</Link>
        </li>
      ))}
    </div>
  );
}