interface InfoLabelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const InfoLabel = ({ children, className = "", id, ...props }: InfoLabelProps) => {
  return (
    <span 
      className={`font-normal text-base text-[#888896] w-20 text-left ${className}`}
      data-testid={id}
      {...props}
    >
      {children}
    </span>
  );
};

export default InfoLabel;
