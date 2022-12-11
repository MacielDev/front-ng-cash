import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuButton } from "../../../shared/components/MenuButton";
import {List} from 'phosphor-react'


export default {
  title: 'Components/MenuButton/Button',
  component:MenuButton
} as ComponentMeta<typeof MenuButton>

export const menuButton: ComponentStory<typeof MenuButton> = () => <MenuButton buttonIcon={<List width={70} height={70} />}/>