import { CustomInput } from "../../../shared/components/CustomInputs";
import { ComponentMeta, ComponentStory} from '@storybook/react'



export default {
  title: 'components/CustomInput',
  component: CustomInput
} as ComponentMeta<typeof CustomInput>

export const Email: ComponentStory<typeof CustomInput> = () => <CustomInput placeholder="put your email here" type="email" labelContent="email" value="testeValor" onChange={() =>{console.log('olá')}}/>

export const Password:ComponentStory<typeof CustomInput> = () => <CustomInput placeholder="put your password here" type="password" labelContent="password" value="testeValor" onChange={() =>{console.log('olá')}}/>