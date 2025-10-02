'use client';

import Image from 'next/image';
import BusinessInfo from './BusinessInfo';

const Confirmation = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-135 h-82">
        <div className="flex flex-col items-center text-center">
          <div className="w-50 h-50 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Image src="/success.png" alt="Success" width={200} height={200} />
          </div>

          <h2 className="text-lg font-bold text-[#60606C] mb-2">Your appointment has been booked!</h2>
          <p className="text-base text-[#131316]">A confirmation has been sent to your email address.</p>
        </div>
      </div>
      <BusinessInfo />
    </div>
  );
}

export default Confirmation;