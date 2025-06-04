import React from 'react';
import { LayoutProps } from '../../../interface';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 text-center text-xl font-bold">My App Header</header>
      <main className="p-6">{children}</main>
      <footer className="bg-white shadow p-4 text-center text-sm">&copy; 2025 My App</footer>
    </div>
  );
};

export default Layout;
