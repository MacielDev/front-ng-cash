import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ServiceButton } from '.';
import { Cardholder } from 'phosphor-react'
describe('Service Button Component tests',()=> {
  it('should render the Service Button Component', () => {
    render(<ServiceButton textButton='wallet' typeButton='button' buttonIcon={<Cardholder width={40} height={40}/>}/>)
    const serviceButton = screen.getByText('wallet');
    expect(serviceButton).toBeInTheDocument();
  });
})