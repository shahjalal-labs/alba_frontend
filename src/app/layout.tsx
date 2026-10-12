import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "../redux/ReduxProvider";
// import PasswordProtectionModal from "./components/PasswordProtectionModal";
import { Toaster } from "./components/ui/sonner";
import "./globals.css";
import logo from '@/assets/fav.png';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "Uenal Immobilien GmbH - Die Dealmaker aus dem Nordwesten",
  description: "Die Dealmaker aus dem Nordwesten",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://uenal-immobilien.de",
  ),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect & dns-prefetch to critical origins */}
        <link rel="preconnect" href="https://static.trustlocal.de" />
        <link rel="dns-prefetch" href="https://static.trustlocal.de" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.propstack.de" />
        <link rel="dns-prefetch" href="https://images.propstack.de" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* <PasswordProtectionModal> */}
          <ReduxProvider>{children}</ReduxProvider>
          <Toaster />
        {/* </PasswordProtectionModal> */}
      </body>
    </html>
  );
}
