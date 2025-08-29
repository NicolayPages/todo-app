import styled, { css } from 'styled-components';

import { TEXT } from 'ui/theme/text';

interface WrapperProps {
  isActive?: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ theme }) => `#BDBDBD`};
  padding: ${({ theme }) =>
    `${theme.paddings.uiPadding} ${theme.paddings.layoutPadding}`};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.big};
  transition: background-color 0.2s ease;
  ${TEXT.P}
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${({ isActive }) =>
    !!isActive &&
    css`
      cursor: default;
      background-color: ${({ theme }) => theme.colors.blue};
    `}
`;
