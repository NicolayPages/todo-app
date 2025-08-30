import styled from 'styled-components';

import { TEXT } from 'ui/theme/text';
import { baseTheme } from 'ui/theme/theme';

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.paddings.titlePadding};
`;

export const Title = styled.h1`
  ${TEXT.H1};
  text-transform: uppercase;
  text-align: center;
  padding-bottom: ${({ theme }) => theme.paddings.titlePadding};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.big};
`;

export const Label = styled.p`
  ${TEXT.H2}
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps.medium};
  @media (max-width: ${baseTheme.breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }
`;
