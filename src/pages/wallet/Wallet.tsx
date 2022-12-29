import { Container } from "./styles"
import logoImg from "../../assets/logo.svg"
import { BalanceValueOutput } from "src/shared/components/BalanceValueOutput"
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react"
import { TransactionButton } from "src/shared/components/TransactionButton"


export const Wallet = () => {
  return (
    <Container>
      <div>
        <div>
          <img src={logoImg} alt="logo NGCash" />
          <BalanceValueOutput balanceValue="R$1200,00" />
        </div>
        <span>
          <TransactionButton textButton="cash-out" buttonIcon={<ArrowCircleUp color="#ED6464" />} />
          <TransactionButton textButton="cash-in" buttonIcon={<ArrowCircleDown color="#66AC92"/>} />
        </span>
      </div>
      
    </Container>
  )
}