import './globals.css'
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXXLD2GZQE"></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-CXXLD2GZQE');
  `}
        </script>
      </head>
      <body>{children}</body>
    </html>
  )
}
