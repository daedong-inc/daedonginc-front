import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'theme';
import { ReactComponent as Icon } from 'assets/icons/search.svg';
import { getNotoTypographyStyles } from 'styles/font/font';

interface SearchBarProps {
  width?: number;
  height?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ width = 220, height = 34 }) => {
  return (
    <SearchBarContainer width={width} height={height}>
      <SearchIcon />
      <SearchInput type="text" placeholder="검색어를 입력하세요" />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div<SearchBarProps>`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  padding: 0px 16px;
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

const SearchIcon = styled(Icon)`
  font-size: 15px;
  cursor: pointer;
`;

const SearchInput = styled.input`
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
`;
