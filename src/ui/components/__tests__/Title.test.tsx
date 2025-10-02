import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Title from '../Title'

describe('Title', () => {
  it('renders title text correctly', () => {
    render(<Title>Test Title</Title>)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('applies default styling classes', () => {
    render(<Title>Test Title</Title>)
    
    const title = screen.getByText('Test Title')
      expect(title).toHaveClass('text-lg', 'font-bold', 'text-[#0A0E15]')
  })

  it('accepts custom className', () => {
    render(<Title className="custom-class">Test Title</Title>)
    
    const title = screen.getByText('Test Title')
    expect(title).toHaveClass('custom-class')
  })

  it('accepts id prop and uses it as data-testid', () => {
    render(<Title id="test-title">Test Title</Title>)
    
    const title = screen.getByTestId('test-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Test Title')
  })

  it('renders as h3 element', () => {
    render(<Title>Test Title</Title>)
    
    const title = screen.getByRole('heading', { level: 3 })
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Test Title')
  })
})
