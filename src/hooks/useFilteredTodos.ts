import { useMemo } from 'react';

import { TODO_FILTER } from 'constants/todoFilter';

import { useTodoStore } from 'store/useTodoStore';

import { ITodo } from 'types/model';

const { ALL, COMPLETED, NOT_COMPLETED } = TODO_FILTER;

export const useFilteredTodos = (): ITodo[] => {
  const todos = useTodoStore(state => state.todos);
  const filter = useTodoStore(state => state.filter);

  return useMemo(() => {
    if (filter === ALL) {
      return todos.sort((a, b) => Number(a.completed) - Number(b.completed));
    }
    if (filter === COMPLETED) {
      return todos.filter(todo => todo.completed);
    }
    if (filter === NOT_COMPLETED) {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  }, [todos, filter]);
};
