'use client'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import styles from './FaqAccordion.module.css'
import { SlArrowDown } from 'react-icons/sl';

export const FaqAccordion = () => {
    return (
        <Accordion className='max-w-[968px]'>
            <AccordionItem >
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>
                        <span className=' text-left w-full'> What is Runes?</span>
                        <SlArrowDown size={24} />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    The RUNES Protocol emerges as a groundbreaking solution to Bitcoin{"'"}s limitations, enabling the creation of fungible inscriptions, or tokens, on the Bitcoin blockchain itself.
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>

                        <span className=' text-left w-full'> Why Runes Protocol matters ?</span>
                        <SlArrowDown size={24} />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    The introduction of fungible tokens on the Bitcoin network opens up a load of applications, from the creation of decentralized finance (DeFi) platforms to Memecoins. This is going to be one of the biggest plays of this bulls cycle.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>

                        <span className=' text-left w-full'> Why Runes Academy is your Gateway to Runes Ecosystem ?</span>
                        <SlArrowDown size={24} />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    You can{"'"}t navigate this new ecosystem alone. You need a Network and the right alpha calls  to be able to make the highest ROI.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>

                        <span className=' text-left w-full'>What is Runes Academy NFT collection ?</span>
                        <SlArrowDown size={24} />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    The Runes academy NFT Collection is all you need to hold for navigating Runes. The collection is going to be on BTC and costs 300 dollars to mint. Holding the NFT gives you access to our discord privatechannels, where we share alpha and give support
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
    );
}