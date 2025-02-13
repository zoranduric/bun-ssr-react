export function Index({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script src="index.js" defer></script>
      </head>
      <body id="root">{children}</body>
    </html>
  );
}
