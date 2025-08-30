import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { TodoItem } from 'components/TodoList/components/TodoItem';

import { ButtonProps } from 'ui/components/Button';
import { CheckerProps } from 'ui/components/Checker';
import { InputProps } from 'ui/components/Input';
import { baseTheme } from 'ui/theme/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={baseTheme}>{component}</ThemeProvider>);
};

jest.mock('ui/components/Button/Button', () => {
  return {
    Button: ({ children, onClick, disabled, title, variant }: ButtonProps) => (
      <button
        onClick={onClick}
        disabled={disabled}
        title={title}
        data-testid={title}
        data-variant={variant}
      >
        {children}
      </button>
    ),
  };
});

jest.mock('ui/components/Checker/Checker', () => {
  return {
    Checker: ({ toggle, active, disable }: CheckerProps) => (
      <input
        type='checkbox'
        checked={active || false}
        disabled={disable}
        onChange={toggle}
        data-testid='checker'
      />
    ),
  };
});

jest.mock('ui/components/Input/Input', () => {
  return {
    Input: ({ value, onChange }: InputProps) => (
      <input value={value || ''} onChange={onChange} data-testid='edit-input' />
    ),
  };
});

jest.mock('ui/icons', () => ({
  Cancel: () => <span data-testid='cancel-icon'>Cancel</span>,
  Delete: () => <span data-testid='delete-icon'>Delete</span>,
  Edit: () => <span data-testid='edit-icon'>Edit</span>,
  Save: () => <span data-testid='save-icon'>Save</span>,
}));

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    description: 'Тестовая задача',
    completed: false,
  };

  const mockFunctions = {
    updateTodo: jest.fn(),
    deleteTodo: jest.fn(),
    toggleTodo: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('должен отображать описание задачи и чекбокс', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    expect(screen.getByText('Тестовая задача')).toBeInTheDocument();
    expect(screen.getByTestId('checker')).toBeInTheDocument();
  });

  it('должен отображать кнопки редактирования и удаления в обычном режиме', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    expect(screen.getByTestId('Редактировать')).toBeInTheDocument();
    expect(screen.getByTestId('Удалить')).toBeInTheDocument();
    expect(screen.queryByTestId('Сохранить')).not.toBeInTheDocument();
    expect(screen.queryByTestId('Отменить')).not.toBeInTheDocument();
  });

  it('должен скрывать кнопку редактирования для завершенных задач', () => {
    const completedTodo = { ...mockTodo, completed: true };

    renderWithTheme(<TodoItem todo={completedTodo} {...mockFunctions} />);

    expect(screen.queryByTestId('Редактировать')).not.toBeInTheDocument();
    expect(screen.getByTestId('Удалить')).toBeInTheDocument();
  });

  it('должен переключаться в режим редактирования', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('Редактировать'));

    expect(screen.getByTestId('edit-input')).toBeInTheDocument();
    expect(screen.getByTestId('Сохранить')).toBeInTheDocument();
    expect(screen.getByTestId('Отменить')).toBeInTheDocument();
    expect(screen.queryByTestId('Редактировать')).not.toBeInTheDocument();
  });

  it('должен вызывать toggleTodo при клике на чекбокс', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('checker'));

    expect(mockFunctions.toggleTodo).toHaveBeenCalledWith(1);
  });

  it('должен вызывать deleteTodo при клике на кнопку удаления', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('Удалить'));

    expect(mockFunctions.deleteTodo).toHaveBeenCalledWith(1);
  });

  it('должен вызывать updateTodo при сохранении изменений', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('Редактировать'));

    const input = screen.getByTestId('edit-input');
    fireEvent.change(input, { target: { value: 'Обновленная задача' } });

    fireEvent.click(screen.getByTestId('Сохранить'));

    expect(mockFunctions.updateTodo).toHaveBeenCalledWith({
      ...mockTodo,
      description: 'Обновленная задача',
    });
  });

  it('должен отменять изменения при клике на кнопку отмены', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('Редактировать'));

    const input = screen.getByTestId('edit-input');
    fireEvent.change(input, { target: { value: 'Измененный текст' } });

    fireEvent.click(screen.getByTestId('Отменить'));

    expect(screen.queryByTestId('edit-input')).not.toBeInTheDocument();
    expect(screen.getByText('Тестовая задача')).toBeInTheDocument();
  });

  it('должен блокировать кнопку сохранения при пустом значении', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('Редактировать'));

    const input = screen.getByTestId('edit-input');
    fireEvent.change(input, { target: { value: '   ' } });

    const saveButton = screen.getByTestId('Сохранить');
    expect(saveButton).toBeDisabled();
  });

  it('должен отображать описание как завершенное когда задача выполнена', () => {
    const completedTodo = { ...mockTodo, completed: true };

    renderWithTheme(<TodoItem todo={completedTodo} {...mockFunctions} />);

    const description = screen.getByText('Тестовая задача');
    expect(description).toBeInTheDocument();
  });

  it('должен блокировать чекбокс в режиме редактирования', () => {
    renderWithTheme(<TodoItem todo={mockTodo} {...mockFunctions} />);

    fireEvent.click(screen.getByTestId('Редактировать'));

    const checker = screen.getByTestId('checker');
    expect(checker).toBeDisabled();
  });
});
