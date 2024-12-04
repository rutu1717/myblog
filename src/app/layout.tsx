
import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <title>Mindtechwellness</title>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CXXLD2GZQE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXXLD2GZQE');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
