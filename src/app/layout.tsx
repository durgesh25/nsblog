import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Novostack Blog | Headless WordPress",
  description: "Official blog for Novostack, built with Next.js and Headless WordPress.",
  icons: {
    icon: 'https://novostack.com/img/brand-logo.png', // Main favicon
    shortcut: 'https://novostack.com/img/brand-logo.png',
    apple: 'https://novostack.com/img/brand-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
