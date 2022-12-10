
interface ILoginInput{
    placeholder: string,
    type:string
}
export const LoginInput = ({placeholder,type}:ILoginInput) => {
    return (
        <input placeholder={placeholder} type={type}></input>
    )
}