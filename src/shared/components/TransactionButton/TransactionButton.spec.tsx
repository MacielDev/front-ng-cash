import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {ArrowCircleUp} from 'phosphor-react'
import { TransactionButton } from '.'
describe('Transaction Button Component tests', () => { 
  it('should render a Transactions Button Component', () => {
    render(<TransactionButton buttonIcon={<ArrowCircleUp width={40} height={40}/>} textButton="cash-out" />)
  })
})