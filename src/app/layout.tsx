import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";


export const metadata: Metadata = {
  title: "Flash Arbitrage dApp",
  description: "Generate Yield by Arbitrage",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/flashArb.png" type="image/x-icon" />
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
