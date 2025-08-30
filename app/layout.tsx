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
  title: "Artia Aryatama",
  description: "Portfolio of Artia Aryatama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${figtree.variable} antialiased 
        pt-[10px]
        bg-background
        `}
      >
        <Navbar />
        <div className="mt-[62px] mb-15">
          {children}

        </div>
        <Footer />
      </body>
    </html> 
  );
}
