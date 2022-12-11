import { ValueOutput } from "./styles";

interface IBalanceValueOutput{
  balanceValue: string;
}
export const BalanceValueOutput = ({balanceValue}:IBalanceValueOutput) => {
  return (
    <ValueOutput>R$1200,00</ValueOutput>
  )
}