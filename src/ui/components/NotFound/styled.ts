import styled from 'styled-components';

import { TEXT } from 'ui/theme/text';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.layoutPadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  ${TEXT.P}
`;
