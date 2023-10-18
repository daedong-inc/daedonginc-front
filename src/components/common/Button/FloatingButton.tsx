import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ScrollTopIcon } from '@assets/icons/scrollTop.svg';

interface StyledButtonProps {
  isVisible: boolean;
}

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolledUp = currentScrollY < prevScrollY;
      const isAtTop = currentScrollY <= 200;
      const isAtBottom =
        currentScrollY + window.innerHeight >= document.body.scrollHeight;

      setIsVisible((isScrolledUp && !isAtTop) || isAtBottom);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <StyledButton isVisible={isVisible} onClick={scrollToTop}>
      <ScrollTopIcon />
    </StyledButton>
  );
};

export default FloatingButton;

const StyledButton = styled.div<StyledButtonProps>`
  position: fixed;
  bottom: 10%;
  right: calc(15vw / 2);
  background: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  ${({ theme }) => theme.media.mobile} {
    transform: scale(0.7, 0.7);
  }
`;
