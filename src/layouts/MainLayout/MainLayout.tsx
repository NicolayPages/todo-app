import { FC } from 'react';

import { Home } from 'pages/Home';

import * as S from './styled';

export const MainLayout: FC = () => {
  return (
    <S.Wrapper>
      <Home />
    </S.Wrapper>
  );
};
