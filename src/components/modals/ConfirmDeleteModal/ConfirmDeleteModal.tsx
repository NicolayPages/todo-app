import { FC } from 'react';

import { Button } from 'ui/components';
import { Modal } from 'ui/components';

import * as S from './styled';

interface Props {
  open: boolean;
  close: () => void;
  description: string;
  onDelete: () => void;
}

export const ConfirmDeleteModal: FC<Props> = ({
  open,
  close,
  description,
  onDelete,
}) => {
  return (
    <Modal open={open} close={close}>
      <S.Wrapper>
        <S.Content>{description}</S.Content>
        <S.Buttons>
          <Button onClick={close}>Отменить</Button>
          <Button onClick={onDelete} variant='danger'>
            Удалить
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Modal>
  );
};
