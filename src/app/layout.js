import "./globals.css";
import { Syne, Inter, Bricolage_Grotesque } from "next/font/google";

const syneSans = Syne({
  variable: "--font-syne-sans",
  subsets: ["latin"],
});
const interSane = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage_grotesque-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syneSans.className} ${interSane.className} ${bricolageGrotesque.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
