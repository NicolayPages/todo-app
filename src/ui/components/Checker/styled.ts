import styled, { css } from 'styled-components';

interface WrapperProps {
  disable?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ theme }) => theme.sizes.uiElement};
  height: ${({ theme }) => theme.sizes.uiElement};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #000;
  border: ${({ theme }) => `${theme.border.small} solid ${theme.colors.dark}`};
  cursor: pointer;
  ${({ disable }) =>
    !!disable &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}
`;
