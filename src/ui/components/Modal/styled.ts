import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.modal};
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) =>
    `${theme.border.small} solid ${theme.colors.blackBlue}`};
  padding: ${({ theme }) => theme.paddings.uiPadding};
  border-radius: ${({ theme }) => theme.radius.middle};
`;

export const Overlay = styled.div`
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.transparentBlack};
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.paddings.layoutPadding};
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radius.middle};
  padding: ${({ theme }) => theme.paddings.layoutPadding};
`;

export const Close = styled.div`
  width: ${({ theme }) => theme.sizes.uiBigElement};
  height: ${({ theme }) => theme.sizes.uiBigElement};
  border-radius: 50%;
  border: ${({ theme }) =>
    `${theme.border.medium} solid ${theme.colors.blackBlue}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
