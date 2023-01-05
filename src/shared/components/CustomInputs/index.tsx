
import { ChangeEvent } from "react";
import { Container, Input } from "./styles"

interface ICustomInput{
    placeholder:string
    type:string;
    labelContent: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const CustomInput = ({placeholder,type,labelContent,value,onChange}:ICustomInput) => {
    return (
        <Container>
            <label>{labelContent}</label>
            <Input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            ></Input>
        </Container>
    )
}