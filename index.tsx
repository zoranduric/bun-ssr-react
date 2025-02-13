export function Index({
  children,
  initialData
}: {
  children: React.ReactNode,
  initialData: any
}) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}`,
          }}
        ></script>
        <script src="index.js" defer></script>
      </head>
      <body id="root">{children}</body>
    </html>
  );
}
