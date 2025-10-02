import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useForm, FormProvider } from 'react-hook-form'
import FormCheckbox from '../FormCheckbox'

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('FormCheckbox', () => {
  it('renders checkbox and label correctly', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          name="test-checkbox"
          label="Test Checkbox Label"
        />
      </TestWrapper>
    )

    expect(screen.getByText('Test Checkbox Label')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('applies default styling classes', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          name="test-checkbox"
          label="Test Checkbox Label"
        />
      </TestWrapper>
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('mt-1', 'h-4', 'w-4', 'text-purple-600', 'focus:ring-purple-500', 'border-gray-300', 'rounded')
  })

  it('accepts custom className', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          name="test-checkbox"
          label="Test Checkbox Label"
          className="custom-class"
        />
      </TestWrapper>
    )

    const container = screen.getByText('Test Checkbox Label').closest('div')?.parentElement
    expect(container).toHaveClass('custom-class')
  })

  it('uses name as id when id is not provided', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          name="test-checkbox"
          label="Test Checkbox Label"
        />
      </TestWrapper>
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'test-checkbox')
  })

  it('uses custom id when provided', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          id="custom-id"
          name="test-checkbox"
          label="Test Checkbox Label"
        />
      </TestWrapper>
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('id', 'custom-id')
  })

  it('uses id as data-testid', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          id="test-checkbox-id"
          name="test-checkbox"
          label="Test Checkbox Label"
        />
      </TestWrapper>
    )

    const checkbox = screen.getByTestId('test-checkbox-id')
    expect(checkbox).toBeInTheDocument()
  })

  it('handles checkbox state changes', () => {
    render(
      <TestWrapper>
        <FormCheckbox
          name="test-checkbox"
          label="Test Checkbox Label"
        />
      </TestWrapper>
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
