import { MenuButton } from "../MenuButton";
import { ServiceButton } from "../ServiceButton";
import { Container } from "./styles";
import { Cardholder,ChartLine,User } from "phosphor-react";



export const MenuServices = () => {
 
  return (
    <Container>
      
      <MenuButton/>
      
        <ServiceButton textButton="wallet" typeButton="button" buttonIcon={<Cardholder width={40} height={40} />} />
        <ServiceButton textButton="transactions" typeButton="button" buttonIcon={<ChartLine width={40} height={40} />} />
        <ServiceButton textButton="logout" typeButton="button" buttonIcon={<User width={40} height={40} />} />
      
    </Container>
  );
}