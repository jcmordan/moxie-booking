'use client';

import { useState } from 'react';
import ContactInformation from '@/components/ContactInformation';
import PaymentInformation from '@/components/PaymentInformation';
import Confirmation from '@/components/Confirmation';

export interface BookingData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    billingZip: string;
    agreeToTerms: boolean;
}

export type BookingStep = 'contact' | 'payment' | 'confirmation';

export default function BookingView() {
    const [currentStep, setCurrentStep] = useState<BookingStep>('contact');
    const [bookingData, setBookingData] = useState<BookingData>({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        billingZip: '',
        agreeToTerms: false,
    });

    const handleStepChange = (step: BookingStep) => {
        setCurrentStep(step);
    };

    const handleDataUpdate = (data: Partial<BookingData>) => {
        setBookingData(prev => ({ ...prev, ...data }));
    };

    const handleBookingSubmit = () => {
        console.log('Booking submitted:', bookingData);
        setCurrentStep('confirmation');
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 'contact':
                return (
                    <ContactInformation
                        data={bookingData}
                        onDataChange={handleDataUpdate}
                        onNext={() => handleStepChange('payment')}
                    />
                );
            case 'payment':
                return (
                    <PaymentInformation
                        data={bookingData}
                        onDataChange={handleDataUpdate}
                        onNext={() => handleStepChange('confirmation')}
                        onSubmit={handleBookingSubmit}
                    />
                );
            case 'confirmation':
                return <Confirmation data={bookingData} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                {renderCurrentStep()}
            </div>
        </div>
    );
}
