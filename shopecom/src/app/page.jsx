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
  { href: "/order-product", label: "Order Product" },
  {href: "/complex-dashboard", label: "Complex Dashboard (slot parallel rout"},
  {href: "/f1", label: "F 1 (Intercepting Route)"},
  {href: "/photo-feed", label: "photo-feed (Parallel Intercepting Routes)"},
  {href: "/client-route", label: "Client Route"},
  {href: "/server-route", label: "Server route"},
  {href: "/users-client", label: "Users client"},
  {href: "/users-server", label: "Users server"},

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