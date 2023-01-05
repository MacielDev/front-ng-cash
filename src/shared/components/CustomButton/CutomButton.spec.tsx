import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CustomButton } from '.'

describe('Custom Button Component tests', () => {
  it('shoud render a Custom Button Component', () => {
    render(<CustomButton
      textButton='button text'
      type='submit'
      onClick={async (event) => event.preventDefault()}
    />)
    const customButtonComponent = screen.getByRole('button');
    expect(customButtonComponent).toBeInTheDocument();
  })
});