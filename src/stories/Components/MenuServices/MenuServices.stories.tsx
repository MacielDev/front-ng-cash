import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuServices } from "src/shared/components/MenuServices";




export default {
  title: 'Components/MenuServices',
  component:MenuServices
} as ComponentMeta<typeof MenuServices>

export const menuServices: ComponentStory<typeof MenuServices> = () => <MenuServices />