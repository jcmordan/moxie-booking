import Image from 'next/image';

interface GoldSpaInfoProps {
  className?: string;
}

const GoldSpaInfo = ({ className = "" }: GoldSpaInfoProps) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-16 h-16 mb-4">
        <Image
          src="/gold_spa_logo.png"
          alt="Moxie Logo"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Gold Spa</h3>
      
      <div className="space-y-4 text-sm text-gray-600 text-left w-full">
        <div>
          <span className="font-medium text-gray-500">Address</span>
          <p className="mt-1 text-gray-800">2525 Camino del Rio S</p>
          <p className="text-gray-800">Suite 315 Room 8</p>
          <p className="text-gray-800">San Diego, CA 92108</p>
        </div>
        <div>
          <span className="font-medium text-gray-500">Email</span>
          <p className="text-purple-600">goldspa@gmail.com</p>
        </div>
        <div>
          <span className="font-medium text-gray-500">Phone</span>
          <p className="text-purple-600">+11 123 4567 222</p>
        </div>
      </div>
    </div>
  );
};

export default GoldSpaInfo;
