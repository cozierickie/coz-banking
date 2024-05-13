import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"; // Import only once
import "./globals.css";
import { Variable } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ // Renamed the variable to avoid conflict
  subsets: ['latin'],
  weight: ['400', '700'],
  Variable: '--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Cozie",
  description: "Cozie is the cool modern banking solution for everyone.",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
