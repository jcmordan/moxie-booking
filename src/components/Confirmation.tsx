'use client';

import { BookingData } from '../views/BookingView';
import BusinessInfo from './BusinessInfo';

interface ConfirmationProps {
  data: BookingData;
}

export default function Confirmation({ data }: ConfirmationProps) {
  // Mock services data - in a real app this would come from props or API
  const services = [
    { name: 'Botox', duration: '45 mins', price: 200 },
    { name: 'Botox', duration: '60 mins', price: 250 }
  ];

  const total = services.reduce((sum, service) => sum + service.price, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Confirmation Message Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2">
        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your appointment has been booked!</h2>
          <p className="text-gray-600">A confirmation has been sent to your email address.</p>
        </div>
      </div>

      {/* Booking Summary Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 lg:w-1/2">
        <div className="space-y-6">
          {/* Spa Information */}
          <BusinessInfo />

          {/* Services */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{service.name}</p>
                    <p className="text-sm text-gray-600">{service.duration}</p>
                  </div>
                  <p className="font-semibold text-gray-900">${service.price}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">${total}</span>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Name:</span> {data.fullName}</p>
              <p><span className="font-medium">Email:</span> {data.email}</p>
              <p><span className="font-medium">Phone:</span> {data.phone}</p>
              {data.message && (
                <p><span className="font-medium">Visit reason:</span> {data.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
