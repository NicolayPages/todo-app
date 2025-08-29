import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from 'constants/storageKeys';
import { TODO_FILTER } from 'constants/todoFilter';

import { ITodo } from 'types/model';
import { ITodoStore } from 'types/store';

export const useTodoStore = create<ITodoStore>()(
  persist(
    set => ({
      todos: [],
      filter: TODO_FILTER.ALL,

      createTodo: (todo: ITodo) =>
        set(state => ({
          todos: [...state.todos, todo],
        })),

      updateTodo: (updatedTodo: ITodo) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo,
          ),
        })),

      deleteTodo: (id: number) =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),

      toggleTodo: (id: number) =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),
      resetCompleted: () =>
        set(state => ({
          todos: state.todos.filter(todo => !todo.completed),
        })),

      setFilter: (status: keyof typeof TODO_FILTER) =>
        set(() => ({
          filter: status,
        })),
    }),
    {
      name: STORAGE_KEYS.TODO_STORAGE,
      partialize: state => ({ todos: state.todos }),
    },
  ),
);
