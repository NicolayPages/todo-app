import { FC } from 'react';

import { TodoFilters } from 'components/TodoFilters';
import { TodoList } from 'components/TodoList';
import { CreateTodo } from 'components/forms';

import { useGetTodoCounts } from 'hooks/useGetTodoCounts';

import { useTodoStore } from 'store/useTodoStore';

import { Block, Button } from 'ui/components';

import * as S from './styled';

export const Home: FC = () => {
  const { notCompleted, completed } = useGetTodoCounts();
  const resetCompleted = useTodoStore(state => state.resetCompleted);

  return (
    <S.Wrapper>
      <S.Title>todos</S.Title>
      <Block>
        <S.Container>
          <CreateTodo />
          <S.Label>Количество оставшихся задач {notCompleted}</S.Label>
          <S.FlexContainer>
            <TodoFilters />
            <Button
              variant='danger'
              disabled={!completed}
              onClick={resetCompleted}
            >
              Очистить завершенные
            </Button>
          </S.FlexContainer>
          <TodoList />
        </S.Container>
      </Block>
    </S.Wrapper>
  );
};
