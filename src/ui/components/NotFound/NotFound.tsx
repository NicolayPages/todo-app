import { FC, memo } from 'react';

import * as S from './styled';

interface Props {
  message?: string;
}

export const NotFound: FC<Props> = memo(({ message = '' }) => {
  return (
    <S.Wrapper>
      <S.Text>{message}</S.Text>
    </S.Wrapper>
  );
});
