import styled from 'styled-components';

import { TEXT } from 'ui/theme/text';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${TEXT.H2}
  margin-bottom: ${({ theme }) => theme.paddings.titlePadding};
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps.medium};
`;
