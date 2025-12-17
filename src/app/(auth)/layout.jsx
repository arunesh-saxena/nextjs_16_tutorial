"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.css";
import { useState } from "react";

const navList = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgotPassword", label: "Forgot Password" },
];

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lightweight behavior — keep in state for now
  };

  return (
    <div className="auth-layout">
      <header>
        <h1>Authentication</h1>
      </header>

      <form onSubmit={handleSubmit} aria-label="Quick input">
        <label htmlFor="auth-input" className="">
          Quick input this will not change if navigate between sub
        </label>
        <input
          id="auth-input"
          className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
          type="text"
          placeholder="Type to filter (demo)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <nav aria-label="Authentication pages">
        <ul className="tabs" role="tablist" aria-label="Authentication tabs">
          {navList.map((route) => {
            const isActive =
              pathname === route.href || pathname.startsWith(route.href + "/");
            return (
              <li
                key={route.href}
                role="presentation"
                className={`tabItem ${isActive ? "active" : ""}`}
              >
                <Link
                  href={route.href}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  className="tab"
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <main>{children}</main>

      <footer>
        <p>&copy; {new Date().getFullYear()} nextjs-15-tutorial</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
