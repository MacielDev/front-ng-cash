import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuButton } from "../../../shared/components/MenuButton";


export default {
  title: 'Components/MenuButton/Button',
  component:MenuButton
} as ComponentMeta<typeof MenuButton>
// eslint-disable-next-line react-hooks/rules-of-hooks
export const menuButton: ComponentStory<typeof MenuButton> = () => <MenuButton />