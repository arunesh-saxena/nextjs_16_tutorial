"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.css";

const navList = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgotPassword", label: "Forgot Password" },
];

const AuthLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="auth-layout">
      <header>
        <h1>Authentication header</h1>
      </header>

      {navList.map((route) => {
        const isActive =
          pathname === route.href ||
          (pathname.startsWith(route.href) && route.href !== "/");
        return (
          <li
            key={route.href}
            className={isActive ? "active" : ""}
          >
            <Link href={route.href}>{route.label}</Link>
          </li>
        );
      })}
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Shopecom footer</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
