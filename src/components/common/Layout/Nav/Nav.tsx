import React, { useState, useEffect } from 'react';
import * as S from './Nav.style';
import Logo from '@components/common/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTE from '@constants/route';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'; // 수정된 부분
import SearchBar from '@components/common/SearchBar';
import theme from 'theme';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const atTop = window.scrollY === 0;
    setIsAtTop(atTop);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let currentTheme = isAtTop
    ? theme.navTheme.nav_lightTheme
    : theme.navTheme.nav_darkTheme;

  if (location.pathname === '/' + ROUTE.SEARCH) {
    currentTheme = theme.navTheme.nav_darkTheme;
  }

  // //모바일일 때 logo 크기 props 변경 방법 고민하기
  // const isMobile = window.innerWidth <= 359;
  // const logoWidth = isMobile ? 140 : 200;
  // const logoHeight = isMobile ? 24 : 34;

  const handleSearchSubmit = () => {
    // const searchLink = '/search-results/' + searchTerm;
    navigate('/search');
  };

  return (
    <S.TopNavContainer
      color={currentTheme.backgroundColor}
      border={currentTheme.border}
    >
      <S.TopNavWrapper>
        <S.LeftContainer>
          <S.LogoButton onClick={() => navigate(ROUTE.MAIN)}>
            <Logo width={200} height={34} color={currentTheme.logoColor} />
          </S.LogoButton>
          <S.NavMenu color={currentTheme.textColor}>
            <li onClick={() => navigate(ROUTE.HISTORY)}>기업정보</li>
            <li onClick={() => navigate(ROUTE.PRODUCT)}>제품소개</li>
            <li onClick={() => navigate(ROUTE.CLIENT)}>주요고객사</li>
            <li onClick={() => navigate(ROUTE.NEWS)}>뉴스</li>
          </S.NavMenu>
        </S.LeftContainer>
        <div>
          <S.SearchWrapper>
            <S.SearchBarContainer
              color={currentTheme.searchBackgroundColor}
              onSubmit={handleSearchSubmit}
            >
              <S.SearchIcon
                color={currentTheme.searchIconColor}
                onClick={handleSearchSubmit}
              />
              <S.SearchInput
                color={currentTheme.searchFontColor}
                placeholderColor={currentTheme.searchPlaceholderColor}
                type="text"
                placeholder="검색어를 입력하세요"
              />
            </S.SearchBarContainer>
          </S.SearchWrapper>
        </div>
        <S.HamburgerButtonContainer>
          <S.HamburgerIcon color={currentTheme.logoColor} />
        </S.HamburgerButtonContainer>
      </S.TopNavWrapper>
    </S.TopNavContainer>
  );
};

export default Nav;
