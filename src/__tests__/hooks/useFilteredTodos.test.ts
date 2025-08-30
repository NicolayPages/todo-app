import { act, renderHook } from '@testing-library/react';

import { TODO_FILTER } from 'constants/todoFilter';

import { useFilteredTodos } from 'hooks/useFilteredTodos';

import { useTodoStore } from 'store/useTodoStore';

import { ITodo } from 'types/model';

describe('useFilteredTodos', () => {
  const mockTodos: ITodo[] = [
    { id: 1, description: 'Задача 1', completed: false },
    { id: 2, description: 'Задача 2', completed: true },
  ];

  beforeEach(() => {
    act(() => {
      useTodoStore.setState({
        todos: [],
        filter: TODO_FILTER.ALL,
      });
    });
  });

  it('должен возвращать все задачи отсортированные когда фильтр ALL', () => {
    act(() => {
      useTodoStore.setState({ todos: mockTodos, filter: TODO_FILTER.ALL });
    });

    const { result } = renderHook(() => useFilteredTodos());

    expect(result.current).toHaveLength(2);
    expect(result.current[0].id).toBe(1); // не завершенные первые
    expect(result.current[1].id).toBe(2);
  });

  it('должен возвращать только завершенные задачи когда фильтр COMPLETED', () => {
    act(() => {
      useTodoStore.setState({
        todos: mockTodos,
        filter: TODO_FILTER.COMPLETED,
      });
    });

    const { result } = renderHook(() => useFilteredTodos());

    expect(result.current).toHaveLength(1);
    expect(result.current[0].id).toBe(2);
  });

  it('должен возвращать только не завершенные задачи когда фильтр NOT_COMPLETED', () => {
    act(() => {
      useTodoStore.setState({
        todos: mockTodos,
        filter: TODO_FILTER.NOT_COMPLETED,
      });
    });

    const { result } = renderHook(() => useFilteredTodos());

    expect(result.current).toHaveLength(1);
    expect(result.current[0].id).toBe(1);
  });

  it('должен обновляться при изменении фильтра', () => {
    act(() => {
      useTodoStore.setState({ todos: mockTodos, filter: TODO_FILTER.ALL });
    });

    const { result, rerender } = renderHook(() => useFilteredTodos());
    expect(result.current).toHaveLength(2);

    act(() => {
      useTodoStore.getState().setFilter(TODO_FILTER.COMPLETED);
    });

    rerender();
    expect(result.current).toHaveLength(1);
  });
});
