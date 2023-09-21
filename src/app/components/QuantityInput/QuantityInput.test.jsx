import { render, screen, fireEvent } from '@testing-library/react'
import QuantityInput from './QuantityInput'

describe('QuantityInput', () => {
  it('renders the initial value', () => {
    render(<QuantityInput initialValue={5} />)
    const value = screen.queryByText(5)
    expect(value).toBeVisible()
  })

  it('increments the value when the plus button is clicked', () => {
    const handleChange = jest.fn()
    render(<QuantityInput initialValue={0} onChange={handleChange} />)

    const plusButton = screen.getByText('+')
    fireEvent.click(plusButton)

    const value = screen.getByText('1')
    expect(value).toBeInTheDocument()
    expect(handleChange).toHaveBeenCalledWith(1)
  })

  it('decrements the value when the minus button is clicked', () => {
    const handleChange = jest.fn()
    render(<QuantityInput initialValue={2} onChange={handleChange} />)

    const minusButton = screen.getByText('-')
    fireEvent.click(minusButton)

    const value = screen.getByText('1')
    expect(value).toBeInTheDocument()
    expect(handleChange).toHaveBeenCalledWith(1)
  })

  it('does not decrement the value below zero', () => {
    const handleChange = jest.fn()
    render(<QuantityInput initialValue={0} onChange={handleChange} />)

    const minusButton = screen.getByText('-')
    fireEvent.click(minusButton)

    const value = screen.getByText('0')
    expect(value).toBeInTheDocument()
    expect(handleChange).not.toHaveBeenCalled()
  })
})
