'use client';

import { useState } from 'react';
import { BookingData } from '../views/BookingView';
import BusinessInfo from './BusinessInfo';

interface PaymentInformationProps {
  data: BookingData;
  onDataChange: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onSubmit: () => void;
}

export default function PaymentInformation({ data, onDataChange, onNext, onSubmit }: PaymentInformationProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    }
    if (!data.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    }
    if (!data.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    }
    if (!data.billingZip.trim()) {
      newErrors.billingZip = 'Billing zip code is required';
    }
    if (!data.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  const handleInputChange = (field: keyof BookingData, value: string | boolean) => {
    onDataChange({ [field]: value });
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Spa Information Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2">
        <BusinessInfo />
      </div>

      {/* Payment Form Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure your appointment by card</h3>
        <p className="text-sm text-gray-600 mb-6">A credit or debit card is required to secure your appointment.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Information
            </label>
            <input
              type="text"
              id="cardNumber"
              value={data.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.cardNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="1234 1234 1234 1234"
              maxLength={19}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                MM/YY
              </label>
              <input
                type="text"
                id="expiryDate"
                value={data.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
              )}
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={data.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.cvv ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="CVV"
                maxLength={4}
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="billingZip" className="block text-sm font-medium text-gray-700 mb-1">
              Billing zip code
            </label>
            <input
              type="text"
              id="billingZip"
              value={data.billingZip}
              onChange={(e) => handleInputChange('billingZip', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.billingZip ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Input text"
            />
            {errors.billingZip && (
              <p className="text-red-500 text-xs mt-1">{errors.billingZip}</p>
            )}
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={data.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              className={`mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded ${
                errors.agreeToTerms ? 'border-red-500' : ''
              }`}
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
              I will pay at least 24 hours before the beginning of your appointment or you may be charged cancellation fee of $100. In the event of emergency, contact us directly. Your card will not be used in case of late cancellation and for future purchases, it will not be charged now.
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>
          )}

          <p className="text-xs text-gray-500">
            By booking this appointment, you acknowledge our terms and conditions and privacy policy. Messages from Gold Spa may include...
          </p>
        </form>
      </div>

      {/* Book Appointment Button - positioned at bottom right */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors shadow-lg"
        >
          Book appointment
        </button>
      </div>
    </div>
  );
}
