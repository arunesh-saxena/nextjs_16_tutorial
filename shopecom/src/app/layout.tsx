export const metadata = {
  title: 'Shopecom',
  description: 'Shopecom | One point Store for all your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
