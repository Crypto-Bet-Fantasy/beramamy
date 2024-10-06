"use client";

import { Button, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import styles from "../components/CommonStyles.module.css";
import { FlexItems } from "./CommonUI";
import { config } from "../config";
import vault from "../abis/vault.json";
import ERC20_ABI from "../abis/ERC20.json";
import { getAccount, writeContract } from "@wagmi/core";
import { parseUnits } from "viem";
import { orbitron } from "@/app/fonts";
import { useAccount } from 'wagmi'
import { FaCircleDollarToSlot } from "react-icons/fa6";

export default function ActionModal({ action }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const {address} = useAccount()

  const CA = "0x7C465310556BaE53B8788d8580d1Ea2AcCD7d80E";

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }


  const handleAction = async () => {
    if (action == "deposit") {
      await writeContract(config, {
        abi: ERC20_ABI,
        address: "0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03",
        functionName: "approve",
        args: [CA, parseUnits(amount, 18)],
      });
    }

    await writeContract(config, {
      abi: vault.abi,
      address: CA,
      functionName: action,
      args: [parseUnits(amount, 18)],
    })
      .then((res) => {
        toast.success("Successfully...");
      })
      .catch((err) => {
        toast.error("Error...");
        console.log(err);
      });
  };

  return (
    <div className="w-full">
      <button onClick={open} className={[styles.btnStyle1, orbitron.className, " font-bold"].join(' ')}>
        {action}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-60 backdrop-blur-[2px]">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-[#140F0F] p-6 text-left align-middle shadow-xl transition-all relative">
                  {/* <Image alt="" src={"/bear-bg.png"} layout="fill" className="py-8 -z-10 object-contain absolute" /> */}
                  <Dialog.Title className="text-2xl font-medium leading-6 text-white flex items-center bg-[#1A1B1F] pl-4 pr-2 h-[48px] rounded-md">
                    <FaCircleDollarToSlot className="mr-4" />
                    <input
                      type="number"
                      value={amount}
                      placeholder="0"
                      className="text-[20px] text-[#818181] w-full bg-transparent outline-none"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                   
                  </Dialog.Title>
                  <div className="text-[#645862] text-sm tracking-[0.19rem] font-light mb-[2rem]">
                    <FlexItems leftText="APY" rightText="52%" />
                    <FlexItems leftText="Your Balance" rightText="52%" />
                    <FlexItems
                      leftText="Availlable To Withdraw"
                      rightText="52%"
                    />
                  </div>

                  <button className={styles.btnStyle1} onClick={handleAction}>
                    {action}{" "}
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
