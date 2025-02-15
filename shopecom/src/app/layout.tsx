import Link from "next/link";

export const metadata = {
  title: {
    default: "Shopecom",
    template: "%s  Shopecom",
    absolute: "",
  },
  description: "Shopecom | One point Store for all your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          <h1>
            Welcome to <Link href="/"> Shopecom</Link> page header
          </h1>
        </header>
        {children}
        <footer style={{ padding: "1rem", backgroundColor: "yellow" }}>
          <p>&copy; 2023 Shopecom. All rights reserved. Footer</p>
        </footer>
      </body>
    </html>
  );
}
