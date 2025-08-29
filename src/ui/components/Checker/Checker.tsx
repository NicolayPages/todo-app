import { FC } from 'react';

import { Checkmark } from 'ui/icons';

import * as S from './styled';

interface Props {
  active?: boolean;
  toggle?: () => void;
  disable?: boolean;
}

export const Checker: FC<Props> = ({
  active = false,
  toggle = () => null,
  disable = false,
}) => {
  const toggleHandler = () => {
    if (disable) {
      return;
    }
    toggle();
  };

  return (
    <S.Wrapper disable={disable} onClick={toggleHandler}>
      {active && <Checkmark />}
    </S.Wrapper>
  );
};
