import Link from "next/link";
import "./globals.css";

import { ErrorWrapper } from './error-wrapper';

export const metadata = {
  title: {
    default: "NestJs 16",
    template: "%s  NestJs 16",
    absolute: "",
  },
  description: "NestJs 16 | One point Store for all your needs",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold text-slate-900">
              NestJs 16
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-900 transition">
                About
              </Link>
              <Link href="/docs" className="text-slate-600 hover:text-slate-900 transition">
                Docs
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition">
                Blog
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-slate-700 hover:text-slate-900">
                Sign in
              </Link>
              <Link
                href="/profile"
                className="hidden sm:inline-flex items-center px-3 py-1.5 bg-sky-600 text-white rounded-md text-sm hover:bg-sky-700 transition"
              >
                Get started
              </Link>
            </div>
          </div>
        </header>

        {/* <ErrorWrapper> */}
          <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
            {children}
          </main>
        {/* </ErrorWrapper> */}

        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nextjs 15 tutorial. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
