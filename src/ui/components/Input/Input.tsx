import { FC } from 'react';

import { InputProps } from './Input.interface';
import * as S from './styled';

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  name,
  disabled = false,
}) => {
  return (
    <S.Wrapper>
      <S.WrapperInput
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
    </S.Wrapper>
  );
};
