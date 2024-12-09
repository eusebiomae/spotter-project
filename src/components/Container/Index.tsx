type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Index = ({ children, className }: TProps) => {
  return (
    <div
      className={`w-full max-w-container mx-auto px-3 @desktop:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Index;
