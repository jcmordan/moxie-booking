import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useForm, FormProvider } from 'react-hook-form'
import FormTextInput from '../FormTextInput'

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('FormTextInput', () => {
  it('renders label and input correctly', () => {
    render(
      <TestWrapper>
        <FormTextInput
          name="test-input"
          label="Test Label"
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with default text type', () => {
    render(
      <TestWrapper>
        <FormTextInput
          name="test-input"
          label="Test Label"
          type="text"
        />
      </TestWrapper>
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders with specified type', () => {
    render(
      <TestWrapper>
        <FormTextInput
          name="test-input"
          label="Test Label"
          type="email"
        />
      </TestWrapper>
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('displays placeholder text', () => {
    render(
      <TestWrapper>
        <FormTextInput
          name="test-input"
          label="Test Label"
          placeholder="Custom placeholder"
        />
      </TestWrapper>
    )
    
    const input = screen.getByPlaceholderText('Custom placeholder')
    expect(input).toBeInTheDocument()
  })

  it('uses default placeholder when none provided', () => {
    render(
      <TestWrapper>
        <FormTextInput
          name="test-input"
          label="Test Label"
        />
      </TestWrapper>
    )
    
    const input = screen.getByPlaceholderText('Input text')
    expect(input).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(
      <TestWrapper>
        <FormTextInput
          name="test-input"
          label="Test Label"
          className="custom-class"
        />
      </TestWrapper>
    )
    
    const container = screen.getByText('Test Label').closest('div')
    expect(container).toHaveClass('custom-class')
  })
})