import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "CloudVector AI | AI-Powered Database Migration & Cloud Modernization",
  description:
    "Accelerate Oracle to OCI and AWS migrations with intelligent assessment and AI-driven automation. Enterprise-grade cloud modernization.",
  openGraph: {
    title: "CloudVector AI",
    description: "AI-Powered Oracle-to-Cloud Transformation",
    url: "https://cloudvector.ai",
    siteName: "CloudVector AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}