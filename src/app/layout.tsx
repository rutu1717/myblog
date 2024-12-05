import './globals.css'
import { Analytics } from '@vercel/analytics/next'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
      <title>Mindtechwellness</title>
      </head>
      <body>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
