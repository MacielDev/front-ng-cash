import { Container, Input } from "./styles"

interface ICustomInput{
    placeholder: string;
    type: string;
    labelContent: string;
}
export const CustomInput = ({placeholder,type,labelContent}:ICustomInput) => {
    return (
        <Container>
            <label>{labelContent}</label>
            <Input placeholder={placeholder} type={type}></Input>
        </Container>
    )
}