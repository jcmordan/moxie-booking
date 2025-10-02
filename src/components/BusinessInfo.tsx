import Image from 'next/image';

interface GoldSpaInfoProps {
  className?: string;
}

const BusinessInfo = ({ className = "" }: GoldSpaInfoProps) => {
  return (
    <div className={`flex flex-col items-center text-center gap-4 bg-white rounded-lg shadow-lg p-4 w-113 h-82 ${className}`}>
      <div className="flex flex-col w-full items-center gap-4">
        <div className="w-20 h-20 rounded-full">
          <Image
            src="/gold_spa_logo.png"
            alt="Gold Spa Logo"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>

        <h3 className="text-lg font-bold text-[#131316]">Gold Spa</h3>
      </div>
      <div className="space-y-4 text-sm text-gray-600 w-full">
        <div className="flex items-start gap-4">
          <span className="font-normal text-base text-[#888896] w-20 text-left">Address</span>
          <div className="text-left">
            <p className="text-[#131316] font-normal">2525 Camino del Rio S</p>
            <p className="text-[#131316] font-normal">Suite 315 Room 8</p>
            <p className="text-[#131316] font-normal">San Diego, CA 92108</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-normal text-base text-[#888896] w-20 text-left">Email</span>
          <p className="text-[#8A1D96] font-normal text-base text-left">goldspa@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-normal text-base text-[#888896] w-20 text-left">Phone</span>
          <p className="text-[#8A1D96] font-normal text-base text-left">+11 123 4567 222</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
