import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useForm, FormProvider } from 'react-hook-form'
import FormTextArea from '../FormTextArea'

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('FormTextArea', () => {
  it('renders label and textarea correctly', () => {
    render(
      <TestWrapper>
        <FormTextArea
          name="test-textarea"
          label="Test Label"
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('displays placeholder text', () => {
    render(
      <TestWrapper>
        <FormTextArea
          name="test-textarea"
          label="Test Label"
          placeholder="Custom placeholder"
        />
      </TestWrapper>
    )
    
    const textarea = screen.getByPlaceholderText('Custom placeholder')
    expect(textarea).toBeInTheDocument()
  })

  it('uses default placeholder when none provided', () => {
    render(
      <TestWrapper>
        <FormTextArea
          name="test-textarea"
          label="Test Label"
        />
      </TestWrapper>
    )
    
    const textarea = screen.getByPlaceholderText('Input text')
    expect(textarea).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(
      <TestWrapper>
        <FormTextArea
          name="test-textarea"
          label="Test Label"
          className="custom-class"
        />
      </TestWrapper>
    )
    
    const container = screen.getByText('Test Label').closest('div')
    expect(container).toHaveClass('custom-class')
  })

  it('uses default rows value when not provided', () => {
    render(
      <TestWrapper>
        <FormTextArea
          name="test-textarea"
          label="Test Label"
        />
      </TestWrapper>
    )
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('rows', '3')
  })

  it('uses custom rows value when provided', () => {
    render(
      <TestWrapper>
        <FormTextArea
          name="test-textarea"
          label="Test Label"
          rows={5}
        />
      </TestWrapper>
    )
    
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('rows', '5')
  })
})