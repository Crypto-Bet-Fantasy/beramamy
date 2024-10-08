"use client";

import Link from "next/link";
import Image from "next/image";
import { h1Title } from "@/app/fonts";
import { connect, injected } from "@wagmi/core";
import { config } from "../config";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const connectWallet = async () => {
    await connect(config, { connector: injected() });
    router.push("/vault");
  };

  return (
    <section className={[" min-h-screen relative addBg"].join(" ")}>
      <Image
        src="/vault-bg.jpeg"
        alt="background image"
        layout="fill"
        quality={100}
        objectFit="cover"
        priority
        className="-z-10 bg-slate-500 blur-[6px]"
      />

      <div className="tablet:px-[8rem] px-4 pt-[15rem]">
        <div className=" max-w-[1000px] text-white">
          <h1 className={[h1Title, "text-[56px] leading-[1.3]"].join(" ")}>
            EARN YIELD THROUGH<br />
             DECENTRALIZE <br />
            ARBITRAGE SYSTEM <br />
          
          </h1>
          <p className=" py-[2rem]">
          Decentralized Finance (DeFi) platform that empowers users to optimize yield generation <br /> through cooperative arbitrage and liquidation strategies. 
          </p>
        </div>
        <div>
          <button
            onClick={connectWallet}
            className=" bg-white px-6 h-[48px] rounded-[20px] font-bold text-black"
          >
            LAUNCH APP
          </button>
          <Link href={"https://docs.flasharb.xyz/"} target="_blank" className=" underline ml-8 text-lg">
            Go to docs
          </Link>
        </div>
      </div>
    </section>
  );
}
