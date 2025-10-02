interface InfoLabelProps {
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

const InfoLabel = ({ children, className = "", ...props }: InfoLabelProps) => {
  return (
    <span 
      className={`font-normal text-base text-[#888896] w-20 text-left ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default InfoLabel;
