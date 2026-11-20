import "./globals.css";

export const metadata = {
  title: "CloudVector AI",
  description: "AI-Powered Database Migration & Cloud Modernization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
