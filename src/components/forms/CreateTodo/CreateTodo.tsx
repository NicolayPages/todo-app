import { FC } from 'react';

import { useInput } from 'hooks/useInput';

import { useTodoStore } from 'store/useTodoStore';

import { Button, Input } from 'ui/components';

import { getRandomId } from 'utils/getRandomId';

import * as S from './styled';

export const CreateTodo: FC = () => {
  const { value, onChange, reset } = useInput();

  const createTodo = useTodoStore(state => state.createTodo);

  const disabled = !value.trim();

  const createHandler = () => {
    createTodo({
      id: getRandomId(),
      description: value,
      completed: false,
    });
    reset();
  };

  return (
    <S.Wrapper>
      <Input placeholder='Введите задачу' value={value} onChange={onChange} />
      <Button disabled={disabled} onClick={createHandler}>
        Создать
      </Button>
    </S.Wrapper>
  );
};
