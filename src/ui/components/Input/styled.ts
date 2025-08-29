import styled from 'styled-components';

import { TEXT } from 'ui/theme/text';

export const Wrapper = styled.div`
  width: 100%;
`;

export const WrapperInput = styled.input`
  border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.dark}`};
  border-radius: ${({ theme }) => theme.radius.small};
  height: ${({ theme }) => theme.sizes.uiHeight};
  width: 100%;
  padding: ${({ theme }) => theme.paddings.uiPadding};
  background-color: ${({ theme }) => theme.colors.lightGray};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  ${TEXT.P}

  &:focus {
    border-color: ${({ theme }) => theme.colors.blackBlue};
    box-shadow: ${({ theme }) =>
      `0 0 0 ${theme.border.small} ${theme.colors.blackBlue}`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.milk};
    border: ${({ theme }) =>
      `${theme.border.small} solid ${theme.colors.gray}`};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.milk};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
