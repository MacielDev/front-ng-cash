import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MenuButton } from '.';

 
describe('Menu Button Component tests', () => {
  it('should render a Menu Button Component', () => {
    render(<MenuButton />)
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });
})