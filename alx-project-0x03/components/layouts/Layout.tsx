import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
};
c// components/layouts/Layout.tsx
import React from 'react';
import { LayoutProps } from '../../../interface';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 text-center text-xl font-bold">
        My App Header
      </header>
      <main className="p-6">{children}</main>
      <footer className="bg-white shadow p-4 text-center text-sm">
        &copy; 2025 My App
      </footer>
    </div>
  );
};

export default Layout;

export default Layout;
