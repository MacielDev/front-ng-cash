import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { CustomInput } from '.'

describe('Login Input component tests',()=>{
    it('shoud render a login input component', ()=> {
        render(
            <CustomInput placeholder='put your email here' type='email' labelContent='email' value='test' onChange={() =>{console.log('olá')}}/>
        )
        const InputLoginComponent = screen.getByPlaceholderText('put your email here')
        expect (InputLoginComponent).toBeInTheDocument()
    });
});