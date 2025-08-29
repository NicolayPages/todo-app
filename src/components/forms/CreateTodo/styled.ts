import styled from 'styled-components';

import { baseTheme } from 'ui/theme/theme';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.medium};

  @media (max-width: ${baseTheme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
