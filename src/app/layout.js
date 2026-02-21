import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainProvider from "@/providers/MainProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Global Client | Advanced",
  description: "Enterprise-grade Next.js architecture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainProvider>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
