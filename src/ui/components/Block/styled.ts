import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.middle};
  padding: ${({ theme }) => theme.paddings.layoutPadding};
`;
