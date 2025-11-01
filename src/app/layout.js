import "./globals.css";
import {
  Syne,
  Inter,
  Bricolage_Grotesque,
  Imperial_Script,
} from "next/font/google";
import Script from "next/script";

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

const imperialScript = Imperial_Script({
  variable: "--font-imperial_script-sans",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${syneSans.className} ${interSane.className} ${bricolageGrotesque.className} ${imperialScript.variable}`}
    >
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
        {/* Optional PNG */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J2EJ886L9Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-J2EJ886L9Z');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
