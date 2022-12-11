import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TransactionButton } from "../../../shared/components/TransactionButton";
import { ArrowCircleDown,ArrowCircleUp } from "phosphor-react"

export default {
  title: 'Components/TransactionButtons',
  component:TransactionButton
} as ComponentMeta<typeof TransactionButton>

export const transactionButtonDow: ComponentStory<typeof TransactionButton> = () => <TransactionButton textButton="cash-in" buttonIcon={<ArrowCircleDown color="#66AC92"/>} />
export const transactionButtonUp: ComponentStory<typeof TransactionButton> = () => <TransactionButton textButton="cash-out" buttonIcon={<ArrowCircleUp color="#ED6464" />}/>