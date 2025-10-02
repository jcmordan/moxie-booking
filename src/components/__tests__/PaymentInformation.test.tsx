import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentInformation from '../PaymentInformation';
import { BusinessProvider } from '../../contexts/BusinessContext';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

const mockBusiness = {
  name: 'Gold Spa',
  logo: '/gold_spa_logo.png',
  address: {
    street: '2525 Camino del Rio S',
    suite: 'Suite 315 Room 8',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92108'
  },
  email: 'goldspa@gmail.com',
  phone: '+11 123 4567 222'
};

const mockBookingData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '1234567890',
  message: 'Test message',
  cardNumber: '1234567890123456',
  expiryDate: '12/34',
  cvv: '',
  billingZip: '12345',
  agreeToTerms: false,
};

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <BusinessProvider business={mockBusiness}>
      {children}
    </BusinessProvider>
  );
};

describe('PaymentInformation CVV Validation', () => {
  const mockOnDataChange = jest.fn();
  const mockOnNext = jest.fn();

  beforeEach(() => {
    mockOnDataChange.mockClear();
    mockOnNext.mockClear();
  });

  it('renders CVV field correctly', () => {
    render(
      <TestWrapper>
        <PaymentInformation
          data={mockBookingData}
          onDataChange={mockOnDataChange}
          onNext={mockOnNext}
        />
      </TestWrapper>
    );

    const cvvInput = screen.getByTestId('cvv');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('placeholder', 'CVV');
  });

  it('filters non-numeric characters and limits CVV input to 3 digits', async () => {
    render(
      <TestWrapper>
        <PaymentInformation
          data={mockBookingData}
          onDataChange={mockOnDataChange}
          onNext={mockOnNext}
        />
      </TestWrapper>
    );

    const cvvInput = screen.getByTestId('cvv');
    
    await act(async () => {
      fireEvent.change(cvvInput, { target: { value: '12a3!@#' } });
    });
    
    // The onChangeTransform should filter out non-numeric characters and limit to 3 digits
    expect(cvvInput).toHaveValue('123');
  });

  it('limits CVV input to maximum 3 digits', async () => {
    render(
      <TestWrapper>
        <PaymentInformation
          data={mockBookingData}
          onDataChange={mockOnDataChange}
          onNext={mockOnNext}
        />
      </TestWrapper>
    );

    const cvvInput = screen.getByTestId('cvv');
    
    await act(async () => {
      fireEvent.change(cvvInput, { target: { value: '123456789' } });
    });
    
    // The onChangeTransform should limit input to 3 digits
    expect(cvvInput).toHaveValue('123');
  });

  it('validates CVV field for empty value on form submission', async () => {
    render(
      <TestWrapper>
        <PaymentInformation
          data={mockBookingData}
          onDataChange={mockOnDataChange}
          onNext={mockOnNext}
        />
      </TestWrapper>
    );

    const continueButton = screen.getByText('Continue');
    
    await act(async () => {
      fireEvent.click(continueButton);
    });
    
    expect(screen.getByText('CVV is required')).toBeInTheDocument();
  });

  it('validates CVV field for wrong length on form submission', async () => {
    render(
      <TestWrapper>
        <PaymentInformation
          data={{ ...mockBookingData, cvv: '12' }}
          onDataChange={mockOnDataChange}
          onNext={mockOnNext}
        />
      </TestWrapper>
    );

    const continueButton = screen.getByText('Continue');
    
    await act(async () => {
      fireEvent.click(continueButton);
    });
    
    expect(screen.getByText('CVV must be exactly 3 digits')).toBeInTheDocument();
  });

  it('accepts valid 3-digit CVV on form submission', async () => {
    render(
      <TestWrapper>
        <PaymentInformation
          data={{ ...mockBookingData, cvv: '123' }}
          onDataChange={mockOnDataChange}
          onNext={mockOnNext}
        />
      </TestWrapper>
    );

    const continueButton = screen.getByText('Continue');
    
    await act(async () => {
      fireEvent.click(continueButton);
    });
    
    // Should not show CVV error message
    expect(screen.queryByText('CVV is required')).not.toBeInTheDocument();
    expect(screen.queryByText('CVV must contain only numbers')).not.toBeInTheDocument();
    expect(screen.queryByText('CVV must be exactly 3 digits')).not.toBeInTheDocument();
  });
});
