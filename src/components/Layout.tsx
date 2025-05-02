import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container-custom py-10">
        {children}
      </main>
      <footer className="bg-primary-dark text-white py-6">
        <div className="container-custom">
          <p className="text-center text-sm">© {new Date().getFullYear()} 田中一郎 | プロフェッショナルWebエンジニア</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;