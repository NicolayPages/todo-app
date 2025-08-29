import { FC, ReactNode } from 'react';

import * as S from './styled';

interface Props {
  children?: ReactNode;
}

export const Block: FC<Props> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
