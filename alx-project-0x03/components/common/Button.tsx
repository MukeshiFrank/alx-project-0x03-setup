import React from 'react';
import { ButtonProps } from '../../../interface';

const Button: React.FC<ButtonProps> = ({ label, size, backgroundColor, onClick }) => {
  const backgroundColorClass = backgroundColor
    ? {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        orange: 'bg-orange-500',
        green: 'bg-green-500',
      }[backgroundColor]
    : 'bg-slate-500';

  return (
    <button
      onClick={onClick}
      className={`${backgroundColorClass} ${size ?? ''} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
