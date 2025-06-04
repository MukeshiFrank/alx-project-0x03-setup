// interface/index.tsx

import React from "react";

export interface HomeProps {
  title: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
