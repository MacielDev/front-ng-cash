import { ChangeEvent, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CustomButton } from "src/shared/components/CustomButton"
import { CustomInput } from "src/shared/components/CustomInputs"
import { AuthContext } from "src/shared/contexts/AuthContext/AuthContext"
import logoImg from '../../assets/logo.svg'
import { Container } from "./styles"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
   
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
   
  };

  const handleLogin = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (email && password) { 
      const logged = await auth.login(email, password);
      if (logged) {
        navigate("/wallet")
      } else {
        navigate('/')
      }
    }
  }
 
  return (
  <Container>
     <form>
      <img src={logoImg} alt="logo NGCash" />
        
      <CustomInput
        placeholder="put your email here"
        type="email"
        labelContent="email"
        value={email}
        onChange={handleEmailInput}
      />

      <CustomInput
        placeholder="put your password here"
        type="password"
        labelContent="password"
        value={password}
        onChange={handlePasswordInput}  
        />
        
        <CustomButton
          textButton="log in"
          type="submit"
          onClick={handleLogin}
        />
      <Link to="/createUser">Create new User</Link>
      </form> 
      
  </Container>
   
  
    
  )
}