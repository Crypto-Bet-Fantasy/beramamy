'use client'
import ActionModal from "@/components/ActionModal"
import { FlexItems } from "@/components/CommonUI";

export default function Home() {
  return (
    <div>
      <h1>Vault handle</h1>
      <section>
        <div className="h-[500px] w-[300px] border border-white rounded-2xl p-4">
       

          <div>
          <FlexItems leftText="APY" rightText="52%" />
          <FlexItems leftText="TVL" rightText="$52k" />
          <FlexItems leftText="Your Deposit" rightText="5k" />
          <FlexItems leftText="Your P&L" rightText="52%" />
          <FlexItems leftText="Your P&L" rightText="52%" />
          
          </div>
          <ActionModal action={"deposit"} />
          <ActionModal action={"withdraw"} />
        </div>
      </section>
    </div>
  );
}
