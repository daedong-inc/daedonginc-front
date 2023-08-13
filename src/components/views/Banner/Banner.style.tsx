import styled from 'styled-components';

import { mediaQuery } from 'styles/mediaQuery';
import { MakeNewTypographStyles, getNotoTypographyStyles } from 'styles/font/font';
import theme from 'theme';

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

