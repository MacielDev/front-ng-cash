import { Button } from "./styles";
interface IMenuButton{
  buttonIcon: JSX.Element;
}
export const MenuButton = ({ buttonIcon}:IMenuButton) => {
  return (
    <Button>
      {buttonIcon}
    </Button>
  );
}