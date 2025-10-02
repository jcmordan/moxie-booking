import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../Button'

describe('Button', () => {
  const mockOnClick = jest.fn()

  beforeEach(() => {
    mockOnClick.mockClear()
  })

  it('renders children correctly', () => {
    render(
      <Button onClick={mockOnClick}>
        Test Button
      </Button>
    )

    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('applies default styling classes', () => {
    render(
      <Button onClick={mockOnClick}>
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    expect(button).toHaveClass('bg-purple-600', 'text-white', 'py-3', 'px-6', 'rounded-lg', 'font-medium')
  })

  it('accepts custom className', () => {
    render(
      <Button onClick={mockOnClick} className="custom-class">
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    expect(button).toHaveClass('custom-class')
  })

  it('calls onClick when button is clicked', () => {
    render(
      <Button onClick={mockOnClick}>
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renders with default button type', () => {
    render(
      <Button onClick={mockOnClick}>
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('renders with specified type', () => {
    render(
      <Button onClick={mockOnClick} type="submit">
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('handles disabled state', () => {
    render(
      <Button onClick={mockOnClick} disabled={true}>
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('does not call onClick when disabled', () => {
    render(
      <Button onClick={mockOnClick} disabled={true}>
        Test Button
      </Button>
    )

    const button = screen.getByText('Test Button')
    fireEvent.click(button)

    expect(mockOnClick).not.toHaveBeenCalled()
  })
})
