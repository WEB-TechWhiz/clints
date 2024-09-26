import { ReactNode } from 'react';
import { Header, Sidebar } from './Components';

type AdminLayoutProps = {
  children: ReactNode;  // Define that Adminlayout expects `children` of type `ReactNode`
};

function Adminlayout({ children }: AdminLayoutProps) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Flex container to hold Sidebar and main content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
      
          <Sidebar />
        

        {/* Main content area */}
        <div className="flex-1 bg-white p-8">
          {children}  {/* Render children passed from RootLayout */}
        </div>
      </div>
    </>
  );
}

export default Adminlayout;
