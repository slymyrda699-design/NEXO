export const metadata = {
  title: "NEXO AI",
  description: "Create amazing videos and images with NEXO AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
