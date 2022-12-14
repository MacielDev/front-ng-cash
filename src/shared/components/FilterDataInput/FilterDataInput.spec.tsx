import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CalendarBlank } from 'phosphor-react'
import { FilterDataInput } from '.'

describe('Filter Data Input component tests', () => { 
  it('should render a Filter Data Component', () => { 
    render(<FilterDataInput/>)
    const filterDataInputComponent = screen.getByPlaceholderText('put a date here')
    expect(filterDataInputComponent).toBeInTheDocument()
  })
})