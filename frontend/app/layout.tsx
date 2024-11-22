export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4caf50" />
        <link rel="icon" href="/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
