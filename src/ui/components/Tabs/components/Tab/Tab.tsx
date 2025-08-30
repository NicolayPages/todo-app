import { FC } from 'react';

import { ITab, TFilter } from 'types/model';

import * as S from './styled';

interface Props {
  data: ITab;
  onChange: (tabId: TFilter) => void;
  isActive?: boolean;
}

export const Tab: FC<Props> = ({ data, onChange, isActive = false }) => {
  const { id, title } = data;
  const onClick = () => {
    if (isActive) {
      return;
    }
    onChange(id as TFilter);
  };

  return (
    <S.Wrapper isActive={isActive} onClick={onClick}>
      {title}
    </S.Wrapper>
  );
};
