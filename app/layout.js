import "./globals.css"

export const metadata = {
  title: "LoopCart",
  description: "Shop the latest products at affordable prices",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
