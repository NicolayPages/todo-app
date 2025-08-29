import { TODO_FILTER } from 'constants/todoFilter';

import { ITodo } from 'types/model';

export interface ITodoStore {
  todos: ITodo[];
  filter: keyof typeof TODO_FILTER;
  createTodo: (todo: ITodo) => void;
  updateTodo: (updatedTodo: ITodo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  resetCompleted: () => void;
  setFilter: (status: keyof typeof TODO_FILTER) => void;
}
