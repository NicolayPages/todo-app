import styled from 'styled-components';

import { TEXT } from 'ui/theme/text';
import { baseTheme } from 'ui/theme/theme';

import { BtnVariants } from './Button.interface';
import { danger, primary, secondary } from './presets';

export const Wrapper = styled.button<{ variant: BtnVariants }>`
  height: ${({ theme }) => theme.sizes.uiHeight};
  border-radius: ${({ theme }) => theme.radius.small};
  min-width: ${({ theme }) => theme.sizes.uiHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.paddings.uiPadding} ${theme.paddings.layoutPadding}`};
  ${TEXT.P}
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  transition:
    background-color 0.3s ease,
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => `0 2px 4px ${theme.colors.gray}`};
  }

  ${({ variant }) => variant === 'secondary' && secondary}
  ${({ variant }) => variant === 'danger' && danger}
  ${({ variant }) => variant === 'primary' && primary}

  @media (max-width: ${baseTheme.breakpoints.mobile}px) {
    width: 100%;
  }
`;
