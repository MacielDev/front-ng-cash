import { Button } from "./style";

interface IServiceButton{
  textButton: string;
  typeButton: "button" | "submit" | "reset" | undefined;
  buttonIcon: JSX.Element;
}

export const ServiceButton = ({textButton,typeButton,buttonIcon}: IServiceButton) => {
  return (
    <Button type={typeButton}>
      {buttonIcon}
      {textButton}
    </Button>
  );
}