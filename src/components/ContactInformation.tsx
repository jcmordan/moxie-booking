'use client';

import { useState } from 'react';
import { BookingData } from '../views/BookingView';
import GoldSpaInfo from './GoldSpaInfo';

interface ContactInformationProps {
  data: BookingData;
  onDataChange: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

export default function ContactInformation({ data, onDataChange, onNext }: ContactInformationProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!data.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!data.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field: keyof BookingData, value: string) => {
    onDataChange({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Spa Information Card */}
      {/* <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2"> */}
        <GoldSpaInfo />
      {/* </div> */}

      {/* Contact Form Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Enter your details below</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={data.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Input text"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Input text"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={data.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Input text"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Visit reason
            </label>
            <textarea
              id="message"
              value={data.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Input text"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
        </form>
      </div>

      {/* Continue Button - positioned at bottom right */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
