import * as S from './Nav.style';
import Logo from '@components/common/Logo';
import { useNavigate } from 'react-router-dom';
import ROUTE from '@constants/route';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <S.TopNavContainer>
      <S.LogoButton>
        <Logo />
      </S.LogoButton>
      <S.NavMenu>
        <li onClick={() => navigate(ROUTE.HISTORY)}>기업정보</li>
        <li onClick={() => navigate(ROUTE.PRODUCT)}>제품소개</li>
        <li onClick={() => navigate(ROUTE.CLIENT)}>주요고객사</li>
        <li onClick={() => navigate(ROUTE.NEWS)}>뉴스</li>
      </S.NavMenu>
      {/* 검색버튼 */}
    </S.TopNavContainer>
  );
};

export default Nav;
