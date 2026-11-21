import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/nav";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  // Replace with your actual production domain so OG images resolve properly
  metadataBase: new URL("https://alberttechnology.com"),

  title: {
    default: "Albert Technology | Start and Grow in Faith",
    template: "%s | Albert Technology",
  },
  description:
    "Practical business strategy and faith-anchored leadership coaching for founders. Backed by 10+ years of finance experience across the UK, US, and Canada.",
  keywords: [
    "Christian business coach",
    "faith-based entrepreneurship",
    "startup strategy consultant",
    "founder coaching",
    "faith and business",
    "startup finance advisor",
    "Albert Technology",
  ],
  authors: [{ name: "Albert" }],
  creator: "Albert Technology",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Albert Technology",
    title: "Albert Technology — Start and Grow in Faith",
    description:
      "Helping founders and leaders start businesses on solid ground, grow them with wisdom, and stay anchored in faith.",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630px preview image in /public
        width: 1200,
        height: 630,
        alt: "Albert Technology - Start and Grow in Faith",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Albert Technology — Start and Grow in Faith",
    description:
      "Practical business strategy and faith-anchored leadership coaching for founders across the UK, US, and Canada.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`$ ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col max-w-7xl mx-auto">
        {/* dynamic island */}
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
