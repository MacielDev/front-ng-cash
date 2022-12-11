import { Button } from "./styles";

interface ICustomButton{
  textButton: string;
}

export const CustomButton = ({textButton }:ICustomButton) => { 
  return (
    <Button>{textButton}</Button>
  );
}