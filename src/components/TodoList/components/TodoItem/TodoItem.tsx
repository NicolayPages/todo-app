import { FC, memo, useState } from 'react';

import { useInput } from 'hooks/useInput';

import { ITodo } from 'types/model';
import { ITodoStore } from 'types/store';

import { Button, Checker, Input } from 'ui/components';
import { Cancel, Delete, Edit, Save } from 'ui/icons';

import * as S from './styled';

interface Props
  extends Pick<ITodoStore, 'updateTodo' | 'deleteTodo' | 'toggleTodo'> {
  todo: ITodo;
}

export const TodoItem: FC<Props> = memo(
  ({ todo, deleteTodo, toggleTodo, updateTodo }) => {
    const { id, completed, description } = todo;

    const [editable, setEditable] = useState<boolean>(false);

    const [value, onChange, _, setValue] = useInput(description);

    const isDisabled = !value.trim();

    const toggleEditable = () => setEditable(e => !e);

    const onSave = () => {
      updateTodo({ ...todo, description: value });
      toggleEditable();
    };

    const onCancel = () => {
      toggleEditable();
      setValue(description);
    };

    const onDelete = () => {
      deleteTodo(id);
    };

    const onToggle = () => {
      toggleTodo(id);
    };

    return (
      <S.Wrapper>
        <S.Container>
          <S.Info>
            <Checker toggle={onToggle} active={completed} disable={editable} />
            {editable ? (
              <Input value={value} onChange={onChange} />
            ) : (
              <S.Description completed={completed}>{description}</S.Description>
            )}
          </S.Info>
          <S.Actions>
            {editable && (
              <>
                <Button
                  disabled={isDisabled}
                  onClick={onSave}
                  title='Сохранить'
                >
                  <Save />
                </Button>
                <Button onClick={onCancel} title='Отменить'>
                  <Cancel />
                </Button>
              </>
            )}
            {!editable && !completed && (
              <Button
                onClick={toggleEditable}
                title='Редактировать'
                variant='secondary'
              >
                <Edit />
              </Button>
            )}
            <Button onClick={onDelete} title='Удалить' variant='danger'>
              <Delete />
            </Button>
          </S.Actions>
        </S.Container>
      </S.Wrapper>
    );
  },
);
