import { ITodo, TFilter } from 'types/model';

export interface ITodoStore {
  todos: ITodo[];
  filter: TFilter;
  createTodo: (todo: ITodo) => void;
  updateTodo: (updatedTodo: ITodo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  resetCompleted: () => void;
  setFilter: (status: TFilter) => void;
}
