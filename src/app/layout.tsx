import "./globals.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
