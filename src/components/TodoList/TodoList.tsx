import { FC, useMemo } from 'react';

import { NOT_FOUND_MSG } from 'constants/notFoundMsg';

import { useFilteredTodos } from 'hooks/useFilteredTodos';

import { useTodoStore } from 'store/useTodoStore';

import { NotFound } from 'ui/components';

import { TodoItem } from './components/TodoItem';
import * as S from './styled';

export const TodoList: FC = () => {
  const todos = useFilteredTodos();

  const updateTodo = useTodoStore(state => state.updateTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const toggleTodo = useTodoStore(state => state.toggleTodo);

  const list = useMemo(() => {
    return todos.map(item => {
      return (
        <TodoItem
          key={item.id}
          todo={item}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      );
    });
  }, [todos, updateTodo, deleteTodo, toggleTodo]);

  if (!todos.length) {
    return <NotFound message={NOT_FOUND_MSG.NO_DATA} />;
  }

  return <S.Wrapper>{list}</S.Wrapper>;
};
