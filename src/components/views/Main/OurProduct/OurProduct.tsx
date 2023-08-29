import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import Button from '@components/common/Button/Button';
import { ReactComponent as ArrowCircleIcon } from '@assets/icons/arrowCircle.svg';

export interface CarouselDataType {
  id: number;
  img: string;
  name: string;
  description: JSX.Element;
}

const OurProduct = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const CarouselData: CarouselDataType[] = [
    {
      id: 1,
      img: `https://picsum.photos/940/700?random=${Math.random()}`,
      name: 'Dual Cap Dropper Tube',
      description: (
        <>
          드로퍼의 감성을 구현한 디자인 및 기능의 튜브
          <br />
          스크류캡 상단에 별도 플립탑캡이 구성된 듀얼 캡 튜브
          <br />
          액상과 밤 타입 제형의 2-in-1 컨셉으로 다양한 내용물 간의 조합 가능
          <br />
          튜브옵션 : Cap Metalizing
        </>
      ),
    },
    {
      id: 2,
      img: `https://picsum.photos/940/700?random=${Math.random()}`,
      name: '222',
      description: (
        <>
          미먀미먀
          <br />
          미먀묭
          <br />
          먀먀먕?
        </>
      ),
    },
  ];

  return (
    <Container>
      <Wrapper>
        <ProductDetailBox>
          <ProductDetailWrapper>
            <TitleBox>
              <Title>OUR PRODUCT</Title>
              <Title_KO>제품 소개</Title_KO>
            </TitleBox>
            <Line />
            <DescriptionBox>
              <ProductName>
                {CarouselData[activeCarouselIndex].name}
              </ProductName>
              <Detail>{CarouselData[activeCarouselIndex].description}</Detail>
            </DescriptionBox>
            <Button outlined buttontype="text_icons" size="m">
              더보기
            </Button>
          </ProductDetailWrapper>
        </ProductDetailBox>
        <CarouselBox>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: '.left-button',
              nextEl: '.right-button',
            }}
            onSlideChange={(swiper) => {
              console.log(swiper);
              setActiveCarouselIndex(swiper.activeIndex);
            }}
            loop={true}
          >
            {CarouselData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductImg src={product.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <LeftButton className="left-button">
            <ArrowCircleIconStyled />
          </LeftButton>
          <RightButton className="right-button">
            <ArrowCircleIconStyled />
          </RightButton>
        </CarouselBox>
      </Wrapper>
    </Container>
  );
};
export default OurProduct;

const Container = styled.div`
  width: 100%;
  /* height: 574px; */
  margin: 30px 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 416px;
  align-items: center;
  max-height: 574px;

  ${({ theme }) => theme.media.desktop_L} {
    grid-template-columns: 1fr 940px;
    padding-right: 7.5vw;
    max-height: 700px;
  }
`;

const ProductDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: #f8f8f8;
  height: 100%;
`;

const ProductDetailWrapper = styled.div`
  height: 100%;
  margin-left: calc((15vw) / 2);
`;

const Line = styled.div`
  width: 30px;
  border-bottom: solid 4px #000000;
`;

const TitleBox = styled.div``;

const Title = styled.p`
  ${getLatoTypographyStyles('Heading3_eb')};
  margin-block-end: 0;

  ${({ theme }) => theme.media.desktop_L} {
    ${getLatoTypographyStyles('Heading2_b')}
  }
`;

const Title_KO = styled.p`
  ${getNotoTypographyStyles('Body1_b')};
`;

const DescriptionBox = styled.div`
  padding-bottom: 30px;
  min-height: 40%;
`;

const ProductName = styled(Title_KO)``;

const Detail = styled.p`
  ${getNotoTypographyStyles('Body2_r')};
`;

const CarouselBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LeftButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;

  top: 45%;
  left: 10%;
  z-index: 10;
`;

const RightButton = styled(LeftButton)`
  transform: rotate(180deg);
  right: 10%;
  left: auto;
`;

const ArrowCircleIconStyled = styled(ArrowCircleIcon)`
  width: 40px;
  height: 40px;
`;
