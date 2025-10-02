interface TitleProps {
  children: React.ReactNode;
  id?: string;
}

const Title = ({ children, id, ...props }: TitleProps) => {
  return (
    <h3 
      className={`text-lg font-bold text-[#0A0E15]`}
      data-testid={id}
      {...props}
    >
      {children}
    </h3>
  );
};

export default Title;
