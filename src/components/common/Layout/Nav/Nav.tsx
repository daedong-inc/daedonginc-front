import * as S from './Nav.style';
import Logo from '@components/common/Logo';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'; // 수정된 부분

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
          <SearchIcon width="20px" height="20px" />
        </S.SearchWrapper>
      </div>
    </S.TopNavContainer>
  );
};

export default Nav;
