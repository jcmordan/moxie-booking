import React from 'react';
import Button from './Button';

interface ButtonBarProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BottomBar = ({ onClick, children }: ButtonBarProps) => {
  return (
    <div className='w-full flex justify-end gap-6 pt-4 pr-30 pb-4 bg-[#FFFFFF] border-t border-gray-200'>
      <Button onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default BottomBar;
