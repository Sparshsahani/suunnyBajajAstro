import "./globals.css";
import { Syne,Inter } from "next/font/google";

const syneSans = Syne({
  variable: "--font-syne-sans",
  subsets: ["latin"],
});
const interSane = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syneSans.className} ${interSane.className}`}>
      <body>{children}</body>
    </html>
  );
}
