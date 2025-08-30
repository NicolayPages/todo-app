import { act } from '@testing-library/react';

import { TODO_FILTER } from 'constants/todoFilter';

import { useTodoStore } from 'store/useTodoStore';

import { ITodo } from 'types/model';

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('useTodoStore', () => {
  beforeEach(() => {
    act(() => {
      useTodoStore.getState().resetCompleted();
      useTodoStore.getState().setFilter(TODO_FILTER.ALL);
    });
  });

  afterEach(() => {
    window.localStorage.clear();
    useTodoStore.setState({
      todos: [],
      filter: TODO_FILTER.ALL,
    });
  });

  describe('начальное состояние', () => {
    it('должно иметь пустой массив todos и фильтр ALL по умолчанию', () => {
      const state = useTodoStore.getState();
      expect(state.todos).toEqual([]);
      expect(state.filter).toBe(TODO_FILTER.ALL);
    });
  });

  describe('createTodo', () => {
    it('должен добавлять новую задачу в хранилище', () => {
      const newTodo: ITodo = {
        id: 1,
        description: 'Тестовая задача',
        completed: false,
      };

      act(() => {
        useTodoStore.getState().createTodo(newTodo);
      });

      const state = useTodoStore.getState();
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0]).toEqual(newTodo);
    });
  });

  describe('updateTodo', () => {
    it('должен обновлять существующую задачу', () => {
      const initialTodo: ITodo = {
        id: 1,
        description: 'Исходная задача',
        completed: false,
      };

      const updatedTodo: ITodo = {
        ...initialTodo,
        description: 'Обновленная задача',
        completed: true,
      };

      act(() => {
        useTodoStore.getState().createTodo(initialTodo);
        useTodoStore.getState().updateTodo(updatedTodo);
      });

      const state = useTodoStore.getState();
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0]).toEqual(updatedTodo);
    });
  });

  describe('deleteTodo', () => {
    it('должен удалять задачу по id', () => {
      const todo1: ITodo = { id: 1, description: 'Задача 1', completed: false };
      const todo2: ITodo = { id: 2, description: 'Задача 2', completed: false };

      act(() => {
        useTodoStore.getState().createTodo(todo1);
        useTodoStore.getState().createTodo(todo2);
        useTodoStore.getState().deleteTodo(1);
      });

      const state = useTodoStore.getState();
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0].id).toBe(2);
    });
  });

  describe('toggleTodo', () => {
    it('должен переключать статус выполнения задачи', () => {
      const todo: ITodo = {
        id: 1,
        description: 'Тестовая задача',
        completed: false,
      };

      act(() => {
        useTodoStore.getState().createTodo(todo);
        useTodoStore.getState().toggleTodo(1);
      });

      let state = useTodoStore.getState();
      expect(state.todos[0].completed).toBe(true);

      act(() => {
        useTodoStore.getState().toggleTodo(1);
      });

      state = useTodoStore.getState();
      expect(state.todos[0].completed).toBe(false);
    });
  });

  describe('resetCompleted', () => {
    it('должен удалять все выполненные задачи', () => {
      const completedTodo: ITodo = {
        id: 1,
        description: 'Выполненная задача',
        completed: true,
      };
      const activeTodo: ITodo = {
        id: 2,
        description: 'Активная задача',
        completed: false,
      };

      act(() => {
        useTodoStore.getState().createTodo(completedTodo);
        useTodoStore.getState().createTodo(activeTodo);
        useTodoStore.getState().resetCompleted();
      });

      const state = useTodoStore.getState();
      expect(state.todos).toHaveLength(1);
      expect(state.todos[0].completed).toBe(false);
    });
  });

  describe('setFilter', () => {
    it('должен обновлять статус фильтра', () => {
      act(() => {
        useTodoStore.getState().setFilter(TODO_FILTER.COMPLETED);
      });

      let state = useTodoStore.getState();
      expect(state.filter).toBe(TODO_FILTER.COMPLETED);

      act(() => {
        useTodoStore.getState().setFilter(TODO_FILTER.NOT_COMPLETED);
      });

      state = useTodoStore.getState();
      expect(state.filter).toBe(TODO_FILTER.NOT_COMPLETED);
    });
  });
});
