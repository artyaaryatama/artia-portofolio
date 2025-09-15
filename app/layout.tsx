import type { Metadata } from "next";
import { Space_Grotesk, Figtree} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "700"]
})

export const metadata: Metadata = {
  title: "Artia Aryatama | Frontend Developer",
  description: "A collection of my work as a frontend developer, from landing pages to web applications.",
  icons: [
    { rel: "icon", url: "/meta-icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/meta-icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/meta-icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    { rel: "icon", url: "/meta-icons/favicon-72x72.png", sizes: "72x72", type: "image/png" },
    { rel: "icon", url: "/meta-icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    { rel: "icon", url: "/meta-icons/android-icon-144x144.png", sizes: "144x144", type: "image/png" },
    { rel: "icon", url: "/meta-icons/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-57x57.png", sizes: "57x57" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-60x60.png", sizes: "60x60" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-72x72.png", sizes: "72x72" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-76x76.png", sizes: "76x76" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-114x114.png", sizes: "114x114" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-120x120.png", sizes: "120x120" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-144x144.png", sizes: "144x144" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-152x152.png", sizes: "152x152" },
    { rel: "apple-touch-icon", url: "/meta-icons/apple-icon-180x180.png", sizes: "180x180" },
    { rel: "manifest", url: "/meta-icons/manifest.json" },
    { rel: "msapplication-TileImage", url: "/meta-icons/ms-icon-144x144.png" }
  ],
  metadataBase: new URL('https://artyaaryatama.me'),
  other: {
    "msapplication-TileColor": "#ffffff",
  },
  openGraph: {
    title: "Artia Aryatama | Frontend Developer",
    description: "A collection of my work as a frontend developer, from landing pages to web applications.",
    url: 'https://artyaaryatama.me',
    siteName: "Artia Aryatama | Frontend Developer",
    images: [
      {
        url: "/meta-icons/og2.png",
        width: 1200,
        height: 630,
        alt: "Artia Aryatama",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artia Aryatama | Frontend Developer",
    description: "A collection of my work as a frontend developer, from landing pages to web applications.",
    images: "/meta-icons/og2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${figtree.variable} antialiased 
        bg-background
        `}
      >
        <Navbar />
        <div className="mb-12 block min-lg:flex min-lg:items-center min-lg:flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html> 
  );
}
