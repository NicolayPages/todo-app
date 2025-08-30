import { FC } from 'react';

import { ButtonProps } from './Button.interface';
import { Wrapper } from './styled';

export const Button: FC<ButtonProps> = ({
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
