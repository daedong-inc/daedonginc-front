import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import { ReactComponent as ArrowCircleIcon } from '@assets/icons/arrowCircle.svg';
import { CompanyMoto } from './Introductions';

interface MobileVerSwiperProps {
  companyMotos: CompanyMoto[];
}

const MotosSwiper_MobileVer: React.FC<MobileVerSwiperProps> = ({
  companyMotos,
}) => {
  return (
    <CarouselBox>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.buttonL',
          nextEl: '.buttonR',
        }}
        loop={true}
      >
        {companyMotos.map((moto) => (
          <SwiperSlide key={moto.id}>
            <MotoImg src={moto.img} alt="회사모토" />
            <ContentsBox>
              <Title>{moto.title}</Title>
              <CenteredLine />
              <Description>{moto.description}</Description>
            </ContentsBox>
          </SwiperSlide>
        ))}
      </Swiper>
      <LeftButton className="buttonL">
        <ArrowCircleIconStyled />
      </LeftButton>
      <RightButton className="buttonR">
        <ArrowCircleIconStyled />
      </RightButton>
    </CarouselBox>
  );
};

export default MotosSwiper_MobileVer;

const CarouselBox = styled.div`
  width: 100vw;
  height: 190px;
  position: relative;
  display: none;

  ${({ theme }) => theme.media.mobile} {
    display: block;
  }

  margin-top: 3rem;
`;

const ContentsBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 126px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MotoImg = styled.img`
  width: 100%;
  filter: brightness(60%);
`;

const Title = styled.div`
  ${getLatoTypographyStyles('Body1_eb')};
  color: white;
`;

const CenteredLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;
`;

const Description = styled.div`
  color: white;
  ${getNotoTypographyStyles('Body4_r')}
`;

const LeftButton = styled.button`
  position: absolute;
  width: 40px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;

  top: 45%;
  left: 5%;
  z-index: 10;
`;

const RightButton = styled(LeftButton)`
  transform: rotate(180deg);
  right: 5%;
  left: auto;
`;

const ArrowCircleIconStyled = styled(ArrowCircleIcon)`
  width: 30px;
  height: 30px;
  path {
    stroke: white;
  }
  rect {
    stroke: white;
  }
`;
