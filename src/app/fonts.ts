import { Orbitron, Roboto } from "next/font/google";

export const roboto = Roboto({ weight: ['100', '300', '400', '700'], subsets: ['latin'], variable: '--font-roboto', })
export const orbitron = Orbitron({ subsets: ["latin"], weight: ['400', '800'], variable: '--font-orbitron', });

export const h1Title = [` font-bold leading-[57px] max-w-[1005px] mx-auto `, orbitron.className].join(" ")