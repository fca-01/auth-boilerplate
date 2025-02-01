
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <main className="flex flex-col items-center justify-center h-full">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;