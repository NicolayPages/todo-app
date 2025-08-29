import styled, { css } from 'styled-components';

import { TEXT } from 'ui/theme/text';

interface DescriptionProps {
  completed?: boolean;
}

export const Wrapper = styled.div`
  border-top: ${({ theme }) =>
    `${theme.border.small} solid ${theme.colors.gray}`};
  padding: ${({ theme }) =>
    `${theme.paddings.layoutPadding} ${theme.paddings.uiPadding}`};
`;

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.medium};
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => `${theme.sizes.uiElement} 1fr`};
  gap: ${({ theme }) => theme.gaps.small};
  align-items: center;
  flex: 1 1 auto;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.small};
  align-items: center;
`;

export const Description = styled.p<DescriptionProps>`
  ${TEXT.P}
  ${({ completed, theme }) =>
    !!completed &&
    css`
      color: ${theme.colors.gray};
      text-decoration: line-through;
    `}
`;
