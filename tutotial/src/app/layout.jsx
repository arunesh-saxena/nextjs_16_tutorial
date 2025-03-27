import Link from "next/link";
import "./globals.css";

import { ErrorWrapper } from './error-wrapper';

export const metadata = {
  title: {
    default: "NestJs 15",
    template: "%s  NestJs 15",
    absolute: "",
  },
  description: "NestJs 15 | One point Store for all your needs",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          <h1>
            Welcome to <Link href="/"> NestJs 1 Tutorial</Link> page header
          </h1>
        </header>
        {/* <ErrorWrapper> */}

          {children}
        {/* </ErrorWrapper> */}
        <footer style={{ padding: "1rem", backgroundColor: "yellow" }}>
          <p>&copy; 2023 Nextjs 15 tutorial. All rights reserved. Footer</p>
        </footer>
      </body>
    </html>
  );
}
