'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { BookingData } from '../views/BookingView';
import BusinessInfo from './BusinessInfo';
import Title from '../ui/components/Title';
import FormTextInput from '../ui/components/FormTextInput';
import FormTextArea from '../ui/components/FormTextArea';
import BottomBar from '../ui/components/ButtonBar';

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
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
          <BusinessInfo />

          <div className="flex flex-col bg-white rounded-lg shadow-lg pt-6 pb-12 pr-15 pl-15 lg:w-1/2 gap-6">
            <Title id="contact-title">Enter your details below</Title>
            <FormProvider {...formMethods}>
              <form id="contact-form" className="space-y-4">
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
        </div>
      </div>
      <BottomBar onClick={formMethods.handleSubmit(onSubmit)}>
        Continue
      </BottomBar>
    </div>
  );
}
