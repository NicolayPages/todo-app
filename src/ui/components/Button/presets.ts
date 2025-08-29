import { css } from 'styled-components';

export const primary = css`
  background-color: ${({ theme }) => theme.colors.blackBlue};
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.lightBlackBlue};
  }
`;

export const secondary = css`
  background-color: ${({ theme }) => theme.colors.violet};
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.lightViolet};
  }
`;

export const danger = css`
  background-color: ${({ theme }) => theme.colors.danger};
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.lightDanger};
  }
`;
