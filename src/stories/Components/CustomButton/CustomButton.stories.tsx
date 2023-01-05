import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomButton } from "../../../shared/components/CustomButton";

export default {
  title: 'Components/CustomButton/Button',
  component: CustomButton
} as ComponentMeta<typeof CustomButton>

export const LoginButton: ComponentStory<typeof CustomButton> = () => <CustomButton textButton="log in" type="submit" onClick={async (event) => event.preventDefault()} />
export const createAccountButton : ComponentStory<typeof CustomButton> = () => <CustomButton textButton="create account" type="submit" onClick={async (event) => event.preventDefault()} />