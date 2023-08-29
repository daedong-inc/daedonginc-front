import React, { useState, useEffect } from 'react';
import * as S from './Nav.style';
import Logo from '@components/common/Logo';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'; // 수정된 부분
import SearchBar from '@components/common/SearchBar';
import theme from 'theme';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <S.TopNavContainer>
      <S.LeftContainer>
        <S.LogoButton>
          <Logo />
        </S.LogoButton>
        <S.NavMenu>
          <li onClick={() => navigate(ROUTE.HISTORY)}>기업정보</li>
          <li onClick={() => navigate(ROUTE.PRODUCT)}>제품소개</li>
          <li onClick={() => navigate(ROUTE.CLIENT)}>주요고객사</li>
          <li onClick={() => navigate(ROUTE.NEWS)}>뉴스</li>
        </S.NavMenu>
      </S.LeftContainer>
      <div>
        <S.SearchWrapper>
          <S.SearchBarContainer>
            <S.SearchIcon />
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
          </S.SearchBarContainer>
        </S.SearchWrapper>
      </div>
    </S.TopNavContainer>
  );
};

export default Nav;
