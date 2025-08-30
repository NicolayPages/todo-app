import { FC } from 'react';

import { NotFoundProps } from './NotFound.interface';
import * as S from './styled';

export const NotFound: FC<NotFoundProps> = ({ message = '' }) => {
  return (
    <S.Wrapper>
      <S.Text>{message}</S.Text>
    </S.Wrapper>
  );
};
