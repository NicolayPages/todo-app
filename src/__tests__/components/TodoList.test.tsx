import { render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { TodoList } from 'components/TodoList/TodoList';

import { NOT_FOUND_MSG } from 'constants/notFoundMsg';
import { TODO_FILTER } from 'constants/todoFilter';

import { useFilteredTodos } from 'hooks/useFilteredTodos';

import { useTodoStore } from 'store/useTodoStore';

import { baseTheme } from 'ui/theme/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={baseTheme}>{component}</ThemeProvider>);
};

jest.mock('hooks/useFilteredTodos', () => ({
  useFilteredTodos: jest.fn(),
}));

jest.mock('ui/components/NotFound/NotFound', () => ({
  NotFound: ({ message }: { message: string }) => (
    <div data-testid='not-found'>{message}</div>
  ),
}));

const mockTodos = [
  { id: 1, description: 'Задача 1', completed: false },
  { id: 2, description: 'Задача 2', completed: true },
];

describe('TodoList', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useTodoStore.setState({
      todos: [],
      filter: TODO_FILTER.ALL,
    });
  });

  it('должен отображать список задач когда есть задачи', () => {
    (useFilteredTodos as jest.Mock).mockReturnValue(mockTodos);

    renderWithTheme(<TodoList />);

    expect(screen.getByText('Задача 1')).toBeInTheDocument();
    expect(screen.getByText('Задача 2')).toBeInTheDocument();
    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument();
  });

  it('должен отображать сообщение когда нет задач', () => {
    (useFilteredTodos as jest.Mock).mockReturnValue([]);

    renderWithTheme(<TodoList />);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
    expect(screen.getByTestId('not-found')).toHaveTextContent(
      NOT_FOUND_MSG.NO_DATA,
    );
    expect(screen.queryByText('Задача 1')).not.toBeInTheDocument();
  });

  it('должен обновляться при изменении списка задач', () => {
    (useFilteredTodos as jest.Mock).mockReturnValue([mockTodos[0]]);

    const { rerender } = renderWithTheme(<TodoList />);

    expect(screen.getByText('Задача 1')).toBeInTheDocument();
    expect(screen.queryByText('Задача 2')).not.toBeInTheDocument();

    (useFilteredTodos as jest.Mock).mockReturnValue(mockTodos);

    rerender(
      <ThemeProvider theme={baseTheme}>
        <TodoList />
      </ThemeProvider>,
    );

    expect(screen.getByText('Задача 1')).toBeInTheDocument();
    expect(screen.getByText('Задача 2')).toBeInTheDocument();
  });
});
