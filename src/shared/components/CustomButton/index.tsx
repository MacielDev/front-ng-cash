import { Button } from "./styles";

interface ICustomButton{
  textButton: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick:(event: React.MouseEvent) => Promise<void>
}

export const CustomButton = ({ textButton, type,onClick }:ICustomButton) => { 
  return (
    <Button type={type} onClick={onClick}>{textButton}</Button>
  );
}