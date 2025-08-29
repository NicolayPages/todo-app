import { ChangeEvent, FC } from 'react';

import * as S from './styled';

interface Props {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
}

export const Input: FC<Props> = ({
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
