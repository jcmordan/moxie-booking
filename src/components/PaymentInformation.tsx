'use client';

import { BookingData } from '@/views/BookingView';
import BusinessInfo from './BusinessInfo';
import Title from '@/ui/components/Title';
import FormTextInput from '@/ui/components/FormTextInput';
import FormCheckbox from '@/ui/components/FormCheckbox';
import { FormProvider, useForm } from 'react-hook-form';
import BottomBar from '@/ui/components/ButtonBar';
import { formatCardNumber, formatExpiryDate } from '@/utils/formatters';
import Button from '@/ui/components/Button';

interface PaymentInformationProps {
  data: BookingData;
  onDataChange: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

export default function PaymentInformation({ data, onDataChange, onNext }: PaymentInformationProps) {
  const formMethods = useForm<BookingData>({
    defaultValues: data,
    mode: 'onChange'
  });

  const handleContinue = (formData: BookingData) => {
    onDataChange(formData);
    onNext();
  };

  const handleBookAppointment = (formData: BookingData) => {
    console.log("booking appointment", formData);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
          <BusinessInfo />

          <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 lg:w-1/2 gap-6">
            <Title id="payment-title">Secure your appointment by card</Title>
            <p className="text-sm font-normal text-[#60606C]">A credit or debit card is required to secure your appointment.</p>
            <FormProvider {...formMethods}>
              <form id="payment-form" className="flex flex-col gap-6">
                <FormTextInput
                  id="cardNumber"
                  name="cardNumber"
                  label="Card Information"
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  required={true}
                  className=""
                  onChangeTransform={formatCardNumber}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormTextInput
                    id="expiryDate"
                    name="expiryDate"
                    label="MM/YY"
                    type="text"
                    placeholder="MM/YY"
                    required={true}
                    onChangeTransform={formatExpiryDate}
                  />

                  <FormTextInput
                    id="cvv"
                    name="cvv"
                    label="CVV"
                    type="password"
                    placeholder="CVV"
                    required={true}
                    onChangeTransform={(value) => value.replace(/\D/g, '')}
                  />

                </div>

                <FormTextInput
                  id="billingZip"
                  name="billingZip"
                  label="Billing zip code"
                  type="text"
                  required={true}
                />

                <FormCheckbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  label="I will pay at least 24 hours before the beginning of your appointment or you may be charged cancellation fee of $100. In the event of emergency, contact us directly. Your card will not be used in case of late cancellation and for future purchases, it will not be charged now."
                  required={true}
                  requiredMessage="You must agree to the terms and conditions"
                />

                <div className="flex flex-col gap-6 border-t border-[#E3E3E8] pt-6">
                  <Button className="w-full" onClick={formMethods.handleSubmit(handleBookAppointment)}>Book appointment</Button>
                  <p className="text-small font-normal text-[#60606C]">
                    By creating this appointment, you acknowledge you will receive automated transactional messages from this merchant.
                  </p>
                </div>

              </form>
            </FormProvider>
          </div>
        </div>
      </div>
      <BottomBar onClick={formMethods.handleSubmit(handleContinue)}>
        Continue
      </BottomBar>
    </div>
  );
}
