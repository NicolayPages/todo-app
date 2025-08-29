import { FC, ReactNode } from 'react';

import { BtnVariants } from './Button.interface';
import { Wrapper } from './styled';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  variant?: BtnVariants;
  disabled?: boolean;
  title?: string;
}

export const Button: FC<Props> = ({
  children,
  onClick = () => null,
  variant = 'primary',
  disabled = false,
  title,
}) => {
  return (
    <Wrapper
      title={title}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
};
