import styled from 'styled-components';

import { mediaQuery } from 'styles/mediaQuery';
import {
  MakeNewTypographStyles,
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import theme from 'theme';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow.svg';

interface WrapperProps {
  img: string;
}

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const SwiperWrapper = styled.div<WrapperProps>`
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${theme.colors.white};
  background-image: url(${(props) => props.img});
  background-size: 100%;
  /* 이미지 비율 유지하며 배경에 꽉 차도록 설정 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
// transform: translateX(-50%);

// &::before {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0,0,0,1); /* 회색으로 어둡게 설정
// }
// background-size: 100% ${mediaQuery.tablet`
//   padding: 40px 20px;
// `};

export const Title = styled.p`
  ${MakeNewTypographStyles('Lato', 700, 70, 60)}
`;
// 위치 고민중
// justify-content: flex-start;
// margin-top: 20%;
// margin-bottom: 3rem;
//   word-break: keep-all;

export const Description = styled.p`
  ${getNotoTypographyStyles('Body2_b')}
  margin-bottom: 30px;
`;

export const ScrollIcon = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
`;

// swiper css

export const CarouselBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SwiperControlBox = styled.div`
  position: absolute;
  top: calc(60% + 100px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  z-index: 10;
`;

export const LeftButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

export const RightButton = styled(LeftButton)`
  transform: rotate(180deg);
`;

export const ArrowIconStyled = styled(ArrowIcon)`
  width: 24px;
  height: 24px;
  color: white;
`;

export const PaginationBulletBox = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 1.5rem;
`;

export const PaginationBullet = styled.span`
  /* css에서 bullet style수정해야함 */
`;
