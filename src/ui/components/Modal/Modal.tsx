import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Close } from 'ui/icons';
import { baseTheme } from 'ui/theme/theme';

import * as S from './styled';

interface Props {
  open: boolean;
  close: () => void;
  children?: ReactNode;
}

export const Modal: FC<Props> = ({ open, close, children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!open) return null;

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      e.preventDefault();
      close();
    }
  };

  return createPortal(
    <S.Overlay ref={overlayRef} onClick={onOverlayClick}>
      <S.Wrapper>
        <S.Header>
          <S.Close onClick={close}>
            <Close color={baseTheme.colors.blackBlue} />
          </S.Close>
        </S.Header>
        <S.Container>{children}</S.Container>
      </S.Wrapper>
    </S.Overlay>,
    document.getElementById('modal-root') as HTMLElement,
  );
};
