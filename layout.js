export const metadata = {
  title: "NEXO AI",
  description: "Create anything with NEXO AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{
        margin: 0,
        background: "#080b18",
        color: "white",
        fontFamily: "Arial"
      }}>
        {children}
      </body>
    </html>
  );
}