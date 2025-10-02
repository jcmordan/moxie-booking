import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import BottomBar from '../ButtonBar'

describe('ButtonBar', () => {
  const mockOnClick = jest.fn()

  beforeEach(() => {
    mockOnClick.mockClear()
  })

  it('renders children correctly', () => {
    render(
      <BottomBar onClick={mockOnClick}>
        Test Button
      </BottomBar>
    )

    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('applies default styling classes', () => {
    render(
      <BottomBar onClick={mockOnClick}>
        Test Button
      </BottomBar>
    )

    const container = screen.getByText('Test Button').closest('div')
    expect(container).toHaveClass('w-full', 'flex', 'justify-end', 'gap-6', 'pt-4', 'pr-30', 'pb-4', 'bg-[#FFFFFF]', 'border-t', 'border-gray-200')
  })

  it('calls onClick when button is clicked', () => {
    render(
      <BottomBar onClick={mockOnClick}>
        Test Button
      </BottomBar>
    )

    const button = screen.getByText('Test Button')
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renders button with default styling', () => {
    render(
      <BottomBar onClick={mockOnClick}>
        Test Button
      </BottomBar>
    )

    const button = screen.getByText('Test Button')
    expect(button).toHaveClass('bg-purple-600', 'text-white', 'py-3', 'px-6', 'rounded-lg', 'font-medium')
  })
})
