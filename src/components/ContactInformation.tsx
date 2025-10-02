'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { BookingData } from '../views/BookingView';
import BusinessInfo from './BusinessInfo';
import Title from '../ui/components/Title';
import FormTextInput from '../ui/components/FormTextInput';
import FormTextArea from '../ui/components/FormTextArea';

interface ContactInformationProps {
  data: BookingData;
  onDataChange: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

export default function ContactInformation({ data, onDataChange, onNext }: ContactInformationProps) {
  const formMethods = useForm<BookingData>({
    defaultValues: data,
    mode: 'onChange'
  });

  const onSubmit = (formData: BookingData) => {
    onDataChange(formData);
    onNext();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <BusinessInfo />

      <div className="flex flex-col bg-white rounded-lg shadow-lg pt-6 pb-12 pr-15 pl-15 lg:w-1/2 gap-6">
        <Title id="contact-title">Enter your details below</Title>
        <FormProvider {...formMethods}>
          <form id="contact-form" onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-4">
            <FormTextInput
              name="fullName"
              label="Full Name"
              type="text"
              required={true}
            />

            <FormTextInput
              name="email"
              label="Email"
              type="email"
              required={true}
            />

            <FormTextInput
              name="phone"
              label="Phone"
              type="tel"
              required={true}
            />

            <FormTextArea
              name="message"
              label="Visit reason"
              required={true}
              rows={3}
            />
          </form>
        </FormProvider>
      </div>

      <div className="fixed bottom-6 right-6">
        <button
          type="submit"
          form="contact-form"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
