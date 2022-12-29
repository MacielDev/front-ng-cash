import { CustomButton } from "src/shared/components/CustomButton"
import { CustomInput } from "src/shared/components/CustomInputs"
import logoImg from '../../assets/logo.svg'
import { Container } from "./styles"

export const Login = () => {
  return (
  <Container>
     <form>
      <img src={logoImg} alt="logo NGCash"/>
      <CustomInput placeholder="put your email here" type="email" labelContent="email" />
      <CustomInput placeholder="put your password here" type="password" labelContent="password" />
      <CustomButton textButton="log in"/>
    </form> 
  </Container>
   
  
    
  )
}