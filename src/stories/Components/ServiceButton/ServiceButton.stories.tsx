import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ServiceButton } from "../../../shared/components/ServiceButton";
import { Cardholder,ChartLine,User } from "phosphor-react";



export default {
  title: 'Components/serviceButton/Button',
  component: ServiceButton
} as ComponentMeta<typeof ServiceButton>

export const walletButton: ComponentStory<typeof ServiceButton> = () => <ServiceButton textButton="wallet" typeButton="button" buttonIcon={<Cardholder width={40} height={40} />} />

export const transactionsButton: ComponentStory<typeof ServiceButton> = () => <ServiceButton textButton="transactions" typeButton="button" buttonIcon={<ChartLine width={40} height={40} />} />

export const logoutButton: ComponentStory<typeof ServiceButton> = () => <ServiceButton textButton="logout" typeButton="button" buttonIcon={<User width={40} height={40} />} />


