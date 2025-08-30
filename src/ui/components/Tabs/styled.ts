import styled from 'styled-components';

import { baseTheme } from 'ui/theme/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.small};
  @media (max-width: ${baseTheme.breakpoints.tablet}px) {
    flex-wrap: wrap;
  }
`;
