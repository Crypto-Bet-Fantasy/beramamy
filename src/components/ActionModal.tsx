'use client'

import { Button, Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import styles from "../styles.module.css"
import { FlexItems } from "./CommonUI"
import {config} from '../config'
import vault from '../abis/vault.json'
import ERC20_ABI from '../abis/ERC20.json'
import { getAccount, writeContract } from "@wagmi/core"
import { parseUnits } from "viem"


export default function ActionModal({action}:any) {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState("")

  const CA =  "0x7C465310556BaE53B8788d8580d1Ea2AcCD7d80E"

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const { address } = getAccount(config);

  const handleAction = async () => {

    if(action == 'deposit'){
        await writeContract(config, {
            abi: ERC20_ABI,
            address: "0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03",
            functionName: "approve",
            args: [CA, parseUnits(amount, 18)],
          })
    }

    await writeContract(config, {
        abi: vault.abi,
        address: CA,
        functionName: action,
        args: [parseUnits(amount, 18)],
      }).then((res) => {
        toast.success("Successfully...")
      }).
      catch((err) => {
        toast.error("Error...")
        console.log(err);
      });

  }

 
  return (
    <div className="w-full">
       <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        {action}
      </Button>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-[#171717] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-2xl font-medium leading-6 text-white flex items-center bg-[#1A1B1F] pl-4 pr-2 h-[48px] rounded-md">
                    <Image
                      src="/images/icons/usdc.svg"
                      alt=""
                      width={25}
                      height={25}
                    />
                    <input
                      type="number"
                      value={amount}
                      placeholder="0"
                      className="text-[20px] text-[#818181] w-full bg-transparent outline-none"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <button
                      className="cursor-pointer bg-[#939191] p-2 rounded-md text-[10px] text-black"
                    >
                      MAX
                    </button>
                  </Dialog.Title>
                  <div className="text-[#645862] text-sm tracking-[0.19rem] font-light mt-4">

                  <FlexItems leftText="APY" rightText="52%" />
          <FlexItems leftText="TVL" rightText="$52k" />
          <FlexItems leftText="Your Deposit" rightText="5k" />
          <FlexItems leftText="Your P&L" rightText="52%" />
          <FlexItems leftText="Your P&L" rightText="52%" />
                    
                  </div>
                  <div className="w-full mt-6">
                    <Button onClick={handleAction}>{action} </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}