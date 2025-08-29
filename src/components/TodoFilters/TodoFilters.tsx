import { FC } from 'react';

import { TODO_FILTER } from 'constants/todoFilter';

import { useTodoStore } from 'store/useTodoStore';

import { Tabs } from 'ui/components';

import { TODO_TABS } from 'constants/todoTabs';
import * as S from './styled';

export const TodoFilters: FC = () => {
  const filter = useTodoStore(state => state.filter);
  const setFilter = useTodoStore(state => state.setFilter);

  const onSetFilterHandler = (id: string) => {
    setFilter(id as keyof typeof TODO_FILTER);
  };

  return (
    <S.Wrapper>
      <Tabs tabs={TODO_TABS} activeId={filter} onChange={onSetFilterHandler} />
    </S.Wrapper>
  );
};
