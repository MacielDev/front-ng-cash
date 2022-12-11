import { Button } from "./styles";

interface ITransactionButton{
  buttonIcon: JSX.Element;
  textButton:string;
}

export const TransactionButton = ({buttonIcon,textButton}:ITransactionButton) => {
  return (
    <Button>
      <div>
        {buttonIcon}
        {textButton}
      </div>
    </Button>
  )
}