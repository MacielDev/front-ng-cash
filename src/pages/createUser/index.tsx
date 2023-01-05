
import logoIMG from "../../assets/logo.svg";
import { CustomInput } from "src/shared/components/CustomInputs";
import { Container } from "./styles";
import { CustomButton } from "src/shared/components/CustomButton";
import { ChangeEvent, useState } from "react";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Container>
      <form action="">
        <img src={logoIMG} alt="logo Ng Cash" />
        <CustomInput
          placeholder="Register your full name"
          labelContent="name"
          type="text"
          value={name}
          onChange={handleNameInput}
        />
        
        <CustomInput
          placeholder="Register a valid email"
          labelContent="email" type="email"
          value={email}
          onChange={handleEmailInput}
        />
        
        <CustomInput
          placeholder="Register a password"
          labelContent="password"
          type="password"
          value={password}
          onChange={handlePasswordInput}
        />
        
        <CustomInput
          placeholder="Confirm the password"
          labelContent="Confirm the password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordInput}
        />
        <CustomButton textButton="create user" type="submit" onClick={async (event) => event.preventDefault()} />
      </form>
      
    </Container>
  )
}