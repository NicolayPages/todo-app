import { FC, useState } from 'react';

import { TodoList } from 'components/TodoList';
import { CreateTodo } from 'components/forms';
import { ConfirmDeleteModal } from 'components/modals';

import { CONFIRM_MSG } from 'constants/confirmMsg';
import { TODO_TABS } from 'constants/todoTabs';

import { useGetTodoCounts } from 'hooks/useGetTodoCounts';

import { useTodoStore } from 'store/useTodoStore';

import { TFilter } from 'types/model';

import { Block, Button, Tabs } from 'ui/components';

import * as S from './styled';

export const Home: FC = () => {
  const { notCompleted, completed } = useGetTodoCounts();

  const resetCompleted = useTodoStore(state => state.resetCompleted);
  const filter = useTodoStore(state => state.filter);
  const setFilter = useTodoStore(state => state.setFilter);

  const [resetModalOpen, setResetModalOpen] = useState<boolean>(false);

  const toggleReset = () => setResetModalOpen(d => !d);

  const onResetHandler = async () => {
    resetCompleted();
    toggleReset();
  };

  const onSetFilterHandler = (id: TFilter) => {
    setFilter(id);
  };

  return (
    <S.Wrapper>
      <S.Title>todos</S.Title>
      <Block>
        <S.Container>
          <S.Label>Количество оставшихся задач {notCompleted}</S.Label>
          <CreateTodo />
          <S.FlexContainer>
            <Tabs
              tabs={TODO_TABS}
              activeId={filter}
              onChange={onSetFilterHandler}
            />
            <Button
              variant='danger'
              disabled={!completed}
              onClick={toggleReset}
            >
              Очистить завершенные
            </Button>
          </S.FlexContainer>
          <TodoList />
        </S.Container>
      </Block>
      {resetModalOpen && (
        <ConfirmDeleteModal
          open={resetModalOpen}
          close={toggleReset}
          description={CONFIRM_MSG.RESET_ALL}
          onDelete={onResetHandler}
        />
      )}
    </S.Wrapper>
  );
};
