import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BalanceValueOutput } from "../../../shared/components/BalanceValueOutput";

export default {
  title: 'Components/BalanceValueOutput',
  component : BalanceValueOutput
} as ComponentMeta<typeof BalanceValueOutput>

export const balanceValueOutput: ComponentStory<typeof BalanceValueOutput> = () => <BalanceValueOutput balanceValue="R$1200,00"/>