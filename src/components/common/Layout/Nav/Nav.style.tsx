import styled from 'styled-components';
import { Z_INDEX } from 'styles/constants';
import { getTypographyStyles } from 'styles/font/font';
import { mediaQuery } from 'styles/mediaQuery';
import theme from 'theme';

export const TopNavContainer = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.navBar};
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
`;
// align-items: center;

export const LogoButton = styled.button`
  all: unset;
  border: 0;
  margin: 0 3rem;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  width: 395px;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  ${getTypographyStyles('Body2_r')};
  cursor: pointer;
  color: ${theme.colors.white};
`;
