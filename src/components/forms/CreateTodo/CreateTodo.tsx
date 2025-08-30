import { FC, useCallback } from 'react';

import { useInput } from 'hooks/useInput';

import { useTodoStore } from 'store/useTodoStore';

import { Button, Input } from 'ui/components';

import { getRandomId } from 'utils/getRandomId';

import * as S from './styled';

export const CreateTodo: FC = () => {
  const { value, onChange, reset } = useInput();

  const createTodo = useTodoStore(state => state.createTodo);

  const disabled = !value.trim();

  const createHandler = useCallback(() => {
    if (disabled) return;

    createTodo({
      id: getRandomId(),
      description: value,
      completed: false,
    });
    reset();
  }, [createTodo, disabled, reset, value]);

  return (
    <S.Wrapper>
      <Input
        placeholder='Введите задачу'
        handleKeyDown={createHandler}
        value={value}
        onChange={onChange}
      />
      <Button disabled={disabled} onClick={createHandler}>
        Создать
      </Button>
    </S.Wrapper>
  );
};
