interface TitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Title = ({ children, className = "", id, ...props }: TitleProps) => {
  return (
    <h3 
          className={`text-lg font-bold text-[#0A0E15] ${className}`}
      data-testid={id}
      {...props}
    >
      {children}
    </h3>
  );
};

export default Title;
