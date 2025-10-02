import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InfoLabel from '../InfoLabel'

describe('InfoLabel', () => {
  it('renders label text correctly', () => {
    render(<InfoLabel>Test Label</InfoLabel>)
    
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('applies default styling classes', () => {
    render(<InfoLabel>Test Label</InfoLabel>)
    
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('font-normal', 'text-base', 'text-[#888896]', 'w-20', 'text-left')
  })

  it('accepts custom className', () => {
    render(<InfoLabel className="custom-class">Test Label</InfoLabel>)
    
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('custom-class')
  })

  it('accepts id prop and uses it as data-testid', () => {
    render(<InfoLabel id="test-label">Test Label</InfoLabel>)
    
    const label = screen.getByTestId('test-label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Test Label')
  })
})
