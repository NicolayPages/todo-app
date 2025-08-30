import { FC } from 'react';

import { BlockProps } from './Block.interface';
import * as S from './styled';

export const Block: FC<BlockProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
