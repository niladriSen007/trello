const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-violet-300">
      {children}
    </div>
  );
};
export default ClerkLayout;
