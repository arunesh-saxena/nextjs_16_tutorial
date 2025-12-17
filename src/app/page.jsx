'use client';
import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const navList = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/feature", label: "Docs › Feature" },
  { href: "/docs/feature/1", label: "Docs › Feature › 1" },
  { href: "/products", label: "Products" },
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
  { href: "/articles/breaking-news-123?lang=en", label: "Article (en)" },
  { href: "/order-product", label: "Order Product" },
  { href: "/complex-dashboard", label: "Complex Dashboard (slot / parallel route)" },
  { href: "/f1", label: "F1 (Intercepting Route)" },
  { href: "/photo-feed", label: "Photo Feed (Parallel/Intercepting)" },
  { href: "/client-route", label: "Client Route" },
  { href: "/server-route", label: "Server Route" },
  { href: "/users-client", label: "Users (client)" },
  { href: "/users-server", label: "Users (server)" },
  { href: "/posts-sequential", label: "Posts Sequential" },
  { href: "/user-parallel/1", label: "User Parallel /1" },
  { href: "/products-db", label: "Products DB" },
  { href: "/react-form", label: "React Form" },
  { href: "/products-db-create", label: "Products DB Create" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return navList;
    return navList.filter(
      (r) => r.label.toLowerCase().includes(q) || r.href.toLowerCase().includes(q)
    );
  }, [query]);

  function handleSearch(e) {
    e.preventDefault();
    setQuery((s) => s.trim());
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Navigation demo</h1>
          <p className="text-slate-600">Clean, responsive list of routes powered by Tailwind CSS</p>
        </header>

        <section className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-3 items-center">
            <label htmlFor="site-search" className="sr-only">Search routes</label>
            <input
              id="site-search"
              type="search"
              placeholder="Search routes…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSubmitted(false); }}
              className={`flex-1 rounded-md border border-slate-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ${styles.searchInput}`}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
            >
              Search
            </button>
          </form>

          {submitted && filtered.length === 0 && (
            <p className="mt-3 text-sm text-slate-500">No routes found for “{query}”.</p>
          )}
        </section>

        <nav aria-label="Primary navigation">
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`block h-full rounded-lg bg-white p-4 shadow-sm hover:shadow-md ring-1 ring-slate-100 transition ${styles.card}`}
                >
                  <span className="font-medium text-slate-900">{route.label}</span>
                  <span className="block mt-2 text-sm text-slate-500 break-words">{route.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-12 text-sm text-slate-500">
          Tip: ensure globals.css imports Tailwind and layout.jsx imports globals.css so classes apply.
        </footer>
      </div>
    </main>
  );
}