import React from 'react';

interface ButtonBarProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BottomBar = ({ onClick, children }: ButtonBarProps) => {
  return (
    <div className='w-full flex justify-end gap-6 pt-4 pr-30 pb-4 bg-[#FFFFFF] border-t border-gray-200'>
      <button
        onClick={onClick}
        className='bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors shadow-lg'
      >
        {children}
      </button>
    </div>
  );
};

export default BottomBar;
