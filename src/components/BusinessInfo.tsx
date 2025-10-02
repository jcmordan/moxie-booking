import Image from 'next/image';
import InfoLabel from '../ui/components/InfoLabel';
import { useBusiness } from '../contexts/BusinessContext';

const BusinessInfo = () => {
  const { business } = useBusiness();

  return (
    <div className={`flex flex-col items-center text-center gap-4 bg-white rounded-lg shadow-lg p-4 w-135 h-82`}>
      <div className="flex flex-col w-full items-center gap-4">
        <div className="w-20 h-20 rounded-full" data-testid="business-logo">
          <Image
            src={business.logo}
            alt={`${business.name} Logo`}
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>

        <h3 className="text-lg font-bold text-[#131316]" data-testid="business-title">{business.name}</h3>
      </div>
      <div className="space-y-4 text-sm text-gray-600 w-full">
        <div className="flex items-start gap-4">
          <InfoLabel id="address-label">Address</InfoLabel>
          <div className="text-left" data-testid="address-values">
            <p className="text-[#131316] font-normal">{business.address.street}</p>
            <p className="text-[#131316] font-normal">{business.address.suite}</p>
            <p className="text-[#131316] font-normal">{business.address.city}, {business.address.state} {business.address.zipCode}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <InfoLabel id="email-label">Email</InfoLabel>
          <p className="text-[#8A1D96] font-normal text-base text-left" data-testid="email-value">{business.email}</p>
        </div>
        <div className="flex items-center gap-4">
          <InfoLabel id="phone-label">Phone</InfoLabel>
          <p className="text-[#8A1D96] font-normal text-base text-left" data-testid="phone-value">{business.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
