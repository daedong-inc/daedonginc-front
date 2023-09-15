import styled from 'styled-components';
import { Z_INDEX } from 'styles/constants';
import { getNotoTypographyStyles } from 'styles/font/font';
import { ReactComponent as Icon } from 'assets/icons/search.svg';
import theme from 'theme';

interface NavMenuProps {
  color: string;
  placeholderColor?: string;
}

export const TopNavContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  z-index: ${Z_INDEX.navBar};
  width: 75%;
  height: 74px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* border-bottom: ${theme.colors.neutral700} 1px solid; */
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

export const NavMenu = styled.ul<NavMenuProps>`
  width: 395px;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  ${getNotoTypographyStyles('Body2_r')};
  cursor: pointer;
  li {
    color: ${(props) => props.color};
  }
`;

// 검색

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarContainer = styled.div<NavMenuProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
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

export const SearchIcon = styled(Icon)<NavMenuProps>`
  font-size: 15px;
  path {
    stroke: ${(props) => props.color};
  }
  cursor: pointer;
`;

export const SearchInput = styled.input<NavMenuProps>`
  flex: 1;
  border: none;
  outline: none;
  padding: 6px 12px;
  font-size: 14px;
  background-color: transparent;
  ${getNotoTypographyStyles('Body3_r')}
  color: ${(props) => props.color};
  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }

  ${({ theme }) => theme.media.desktop_S} {
    display: none;
  }
`;
