import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  variant?: BtnVariants;
  disabled?: boolean;
  title?: string;
}

export type BtnVariants = 'primary' | 'secondary' | 'danger';
