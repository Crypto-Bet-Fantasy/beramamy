import type { Metadata } from "next";
import localFont from "next/font/local";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { Providers } from "./provider";


export const metadata: Metadata = {
  title: "Sleymoon dApp",
  description: "Generate Yield by Arbitrage",
};

const queryClient = new QueryClient();

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
