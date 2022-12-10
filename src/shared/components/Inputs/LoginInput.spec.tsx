import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { LoginInput } from '.'

describe('Login Input',()=>{
    it('shoud render a input component', ()=> {
        render(
            <LoginInput placeholder='put your email here' type='email'/>
        )
        const InputLoginComponent = screen.getByPlaceholderText('put your email here')
        expect (InputLoginComponent).toBeInTheDocument()
    })
})