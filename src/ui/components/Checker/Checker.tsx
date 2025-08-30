import { FC } from 'react';

import { Checkmark } from 'ui/icons';

import { CheckerProps } from './Checker.interface';
import * as S from './styled';

export const Checker: FC<CheckerProps> = ({
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
