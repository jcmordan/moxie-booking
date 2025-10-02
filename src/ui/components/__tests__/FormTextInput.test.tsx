import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
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

  it('validates required fields cannot be empty', async () => {
    const TestForm = () => {
      const methods = useForm()
      const onSubmit = (data: unknown) => console.log(data)

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormTextInput
              name="test-input"
              label="Test Label"
              required={true}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      )
    }

    render(<TestForm />)

    const submitButton = screen.getByText('Submit')

    await act(async () => {
      fireEvent.click(submitButton)
    })

    expect(screen.getByText('Test Label is required')).toBeInTheDocument()
  })

  it('validates required fields cannot contain only whitespace', async () => {
    const TestForm = () => {
      const methods = useForm()
      const onSubmit = (data: unknown) => console.log(data)

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormTextInput
              name="test-input"
              label="Test Label"
              required={true}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      )
    }

    render(<TestForm />)

    const input = screen.getByRole('textbox')

    await act(async () => {
      fireEvent.change(input, { target: { value: '   ' } })
    })

    const submitButton = screen.getByText('Submit')

    await act(async () => {
      fireEvent.click(submitButton)
    })

    expect(screen.getByText('Test Label cannot contain only whitespace')).toBeInTheDocument()
  })
})