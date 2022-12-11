import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MenuButton } from '.';
import { List} from 'phosphor-react'
 
describe('Menu Button Component tests', () => {
  it('should render a Menu Button Component', () => {
    render(<MenuButton buttonIcon={<List width={40} height={40} />}/>)
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });
})