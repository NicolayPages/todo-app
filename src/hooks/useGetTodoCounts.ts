import { useMemo } from 'react';

import { useTodoStore } from 'store/useTodoStore';

export const useGetTodoCounts = () => {
  const todos = useTodoStore(state => state.todos);

  return useMemo(() => {
    let completed = 0;
    let notCompleted = 0;

    for (const todo of todos) {
      if (todo.completed) {
        completed++;
      } else {
        notCompleted++;
      }
    }

    return {
      all: todos.length,
      completed,
      notCompleted,
    };
  }, [todos]);
};
