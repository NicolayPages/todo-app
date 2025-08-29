import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.paddings.layoutPadding};
`;
