import { cn } from '@/lib/design-system/utils/cn';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium tracking-wide',
    'transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform active:scale-95',
    'select-none'
  ];

  const variantClasses = {
    primary: [
      'bg-green-600 text-white',
      'hover:bg-green-700',
      'focus:ring-green-500',
      'shadow-lg hover:shadow-xl',
      'hover:shadow-green-500/25'
    ],
    secondary: [
      'bg-white text-transparent border-2 border-green-600',
      'hover:bg-green-50 hover:border-green-700',
      'focus:ring-green-500',
      'shadow-sm hover:shadow-md'
    ],
    outline: [
      'bg-transparent text-green-600 border-2 border-green-600',
      'hover:bg-green-600 hover:text-white',
      'focus:ring-green-500',
      'shadow-sm hover:shadow-md'
    ],
    ghost: [
      'bg-transparent text-green-600',
      'hover:bg-green-50',
      'focus:ring-green-500'
    ]
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl'
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}