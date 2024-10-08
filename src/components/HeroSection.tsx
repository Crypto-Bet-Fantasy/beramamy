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
        src="/runes-hero.png"
        alt="background image"
        layout="fill"
        quality={100}
        objectFit="cover"
        priority
        className="-z-10 bg-slate-500 blur-[6px]"
      />

      <div className="tablet:px-[6rem] px-4 pt-[15rem]">
        <div className=" max-w-[560px] text-white">
          <h1 className={[h1Title, "text-[56px]"].join(" ")}>
            THE COMMUNITY <br />
            YOU NEED TO <br />
            OUTPERFORM <br />
            ON RUNES
          </h1>
          <p className=" py-[2rem]">
            Runes insiders have gathered to create a private Academy where lucky
            students will learn useful secrets...
          </p>
        </div>
        <div>
          <button
            onClick={connectWallet}
            className=" bg-white px-6 h-[48px] rounded-[20px] font-bold text-black"
          >
            Start earn yield
          </button>
          <Link href={""} className=" underline ml-8 text-lg">
            Go to docs
          </Link>
        </div>
        {/* <div>
          <Link href="#">
            <FaDiscord />
          </Link>
          <Link href="#">
            <FaX />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
