import { useMemo } from 'react';

import { useTodoStore } from 'store/useTodoStore';

export const useGetTodoCounts = () => {
  const todos = useTodoStore(state => state.todos);

  return useMemo(() => {
    return {
      all: todos.length,
      completed: todos.filter(todo => todo.completed).length,
      notCompleted: todos.filter(todo => !todo.completed).length,
    };
  }, [todos]);
};
