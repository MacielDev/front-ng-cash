import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FilterDataInput } from "../../../shared/components/FilterDataInput";

export default {
  title: 'Components/FilterDataInput',
  component: FilterDataInput
} as ComponentMeta<typeof FilterDataInput>

export const componentDataFilter: ComponentStory<typeof FilterDataInput> = () => <FilterDataInput/>