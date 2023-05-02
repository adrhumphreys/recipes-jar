import Link from "next/link";
import "./globals.css";
import { IBM_Plex_Mono, Merriweather } from "next/font/google";
import type { ReactNode } from "react";

const mono = IBM_Plex_Mono({
  variable: "--font-ibm-flex-mono",
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});
const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: "900",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipes",
  description: "Just some of our recipes",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${mono.variable} ${merriweather.variable} font-sans min-h-screen border-b-8 border-b-charcoal bg-beige text-charcoal antialiased`}
      >
        <div className="border-b-2 border-b-charcoal">
          <div className="mx-auto flex max-w-6xl justify-between py-4 px-8">
            <Link href="/" className="font-bold">
              All recipes
            </Link>
            <div>
              <p>{"<3"}</p>
            </div>
          </div>
        </div>
        <main className="mx-auto max-w-6xl px-8 py-12">{children}</main>
      </body>
    </html>
  );
}
