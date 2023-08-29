import styled from 'styled-components';
import { Z_INDEX } from 'styles/constants';
import { getNotoTypographyStyles } from 'styles/font/font';
import theme from 'theme';
import { ReactComponent as Icon } from 'assets/icons/search.svg';

export const TopNavContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  z-index: ${Z_INDEX.navBar};
  width: 75%;
  height: 80px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
`;

export const LogoButton = styled.button`
  all: unset;
  border: 0;
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
  ${getNotoTypographyStyles('Body2_r')};
  cursor: pointer;
  color: ${theme.colors.white};
`;

// 검색

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  padding: 0px 16px;
  width: 220px;
  height: 34px;

  ${({ theme }) => theme.media.desktop_S} {
    background: none;
    border: none;
    width: 20px;
    margin-left: 20px;
  }
`;

export const SearchIcon = styled(Icon)`
  font-size: 15px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 6px 12px;
  font-size: 14px;
  background-color: transparent;
  ${getNotoTypographyStyles('Body3_r')}
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  ${({ theme }) => theme.media.desktop_S} {
    display: none;
  }
`;
