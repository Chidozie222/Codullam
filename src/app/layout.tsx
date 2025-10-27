import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Head } from "next/document";

export const metadata = {
  title: "Codullam",
  description: "Codullam — build your MVP without the tech hassle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <link rel="icon" href="/Codullam Logo.png" />
      <body className="antialiased text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
