import { FC, KeyboardEvent } from 'react';

import { InputProps } from './Input.interface';
import * as S from './styled';

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  name,
  disabled = false,
  handleKeyDown,
}) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!handleKeyDown) {
        return;
      }
      handleKeyDown();
    }
  };

  return (
    <S.Wrapper>
      <S.WrapperInput
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
    </S.Wrapper>
  );
};
