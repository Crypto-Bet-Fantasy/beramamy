import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";


export const metadata: Metadata = {
  title: "FlashArb",
  description: "Generate Yield by Arbitrage",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
         {children}
        </Providers>
      </body>
    </html>
  );
}
