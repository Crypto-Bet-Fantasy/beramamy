"use client";
import ActionModal from "@/components/ActionModal";
import { FlexItems } from "@/components/CommonUI";
import commonStyles from "../../components/CommonStyles.module.css";
import Navbar from "@/components/Navbar";
import { config } from "@/config";
import { getAccount, readContract } from "@wagmi/core";
import vault from "../../abis/vault.json";
import { useEffect, useState } from "react";
import { formatUnits, parseUnits } from "viem";
import {useReadContract, useAccount} from 'wagmi'
import Image from "next/image";
import { h1Title } from "../fonts";

const CA = "0x7C465310556BaE53B8788d8580d1Ea2AcCD7d80E";

export default function Home() {
  const { address } = useAccount();

  const {data:userBalance} =  useReadContract({
    abi: vault.abi,
    address: CA,
    functionName: "balanceOf",
    args: [address],
  });

  const {data:vaultBalance} =  useReadContract({
    abi: vault.abi,
    address: CA,
    functionName: "totalBalance",
    args: [],
  });


  console.log(userBalance, vaultBalance)

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <section className={commonStyles.padding}>
      <Image
        src="/vault-bg.png"
        alt="background image"
        layout="fill"
        quality={100}
        objectFit="cover"
        priority
        className="-z-10 bg-slate-500 blur-2xl"
      />

      <div
        className={["tablet:flex justify-around pb-8 items-center"].join(" ")}
      >
        <div className="h-[500px] bg-[#140F0F] w-[500px] flex flex-col justify-between rounded-xl p-[2rem]">
            <h1 className={[h1Title, "text-[26px]"].join(" ")}>$HONEY - ARBITRAGE</h1>
          <div className="mb-[1rem]">
            <FlexItems leftText="APY" rightText="52%" />
            <FlexItems leftText="Vault Balance" 
            //@ts-ignore
            rightText={vaultBalance ? parseFloat(formatUnits(vaultBalance, 18)).toFixed(2) + " HONEY" : "0"} />
            <FlexItems leftText="Your Deposit" 
            //@ts-ignore
            rightText={userBalance ? parseFloat(formatUnits(userBalance, 18)).toFixed(2) + " HONEY" : "0"} />
            <FlexItems leftText="Your P&L" rightText="--" />
            <FlexItems leftText="Availlable To Withdraw" rightText="--" />
          </div>

          <div className="flex w-full justify-between gap-12">
            <ActionModal action={"deposit"} />
            <ActionModal action={"withdraw"} />
          </div>
        </div>
        <div>
          <img
            src="/runes-key.png"
            alt=""
            className="tablet:max-w-[616px]  max-h-[600px] mt-6"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
