import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BalanceValueOutput } from '.'

describe('Balance Value Output Component tests', () => {
  it('should render a balance value output component', () => { 
    render(<BalanceValueOutput balanceValue="R$1200,00" />)
    const balanceOutputValueComponent = screen.getByText('R$1200,00')
    expect(balanceOutputValueComponent).toBeInTheDocument()
  })
})