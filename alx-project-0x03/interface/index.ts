export interface PageRouteProps {
  title: string;
}

export interface ButtonProps {
  label: string;
  size?: string;
  backgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
