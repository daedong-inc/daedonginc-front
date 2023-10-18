import { useState, useEffect } from 'react';
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
import SwiperMobile from './SwiperMobile';

export interface CarouselDataType {
  id: number;
  img: string;
  name: string;
  description: JSX.Element;
}

const OurProduct = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const CarouselData: CarouselDataType[] = [
    {
      id: 1,
      img: 'src/assets/Main/Rectangle 64.png',
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
    {
      id: 3,
      img: `https://picsum.photos/940/700?random=${Math.random()}`,
      name: '3',
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

  useEffect(() => {
    const prevButton = document.querySelector(
      '.left-button-ourproduct',
    ) as HTMLElement;
    if (prevButton) {
      if (isFirstSlide) {
        prevButton.style.display = 'none';
      } else {
        prevButton.style.display = 'block';
      }
    }
  }, [isFirstSlide]);

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
            {/* 모바일 */}
            <SwiperMobile CarouselData={CarouselData} />
            {/*  */}
            <DescriptionBox>
              <ProductName>
                {CarouselData[activeCarouselIndex].name}
              </ProductName>
              <Detail>{CarouselData[activeCarouselIndex].description}</Detail>
            </DescriptionBox>
            <ShowMoreButton outlined buttontype="text_icons" size="m">
              더보기
            </ShowMoreButton>
          </ProductDetailWrapper>
        </ProductDetailBox>
        <CarouselBox>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: '.left-button-ourproduct',
              nextEl: '.right-button-ourproduct',
            }}
            onSwiper={(swiper) => {
              setIsFirstSlide(swiper.isBeginning);
            }}
            onSlideChange={(swiper) => {
              setActiveCarouselIndex(swiper.activeIndex);

              const isLastSlide = swiper.isEnd;
              const nextButton = document.querySelector(
                '.right-button-ourproduct',
              ) as HTMLElement;

              if (nextButton) {
                if (isLastSlide) {
                  nextButton.style.display = 'none';
                } else {
                  nextButton.style.display = 'block';
                }
              }

              setIsFirstSlide(swiper.isBeginning);
            }}
            loop={false}
            watchOverflow={true}
          >
            {CarouselData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductImg src={product.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <LeftButton className="left-button-ourproduct">
            <ArrowCircleIconStyled />
          </LeftButton>
          <RightButton className="right-button-ourproduct">
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

  ${({ theme }) => theme.media.mobile} {
    height: 593px;
  }
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

  ${({ theme }) => theme.media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const ProductDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: #f8f8f8;
  height: 100%;

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
    text-align: center;
    width: 100vw;
  }
`;

const ProductDetailWrapper = styled.div`
  height: 100%;
  margin-left: calc((15vw) / 2);
  min-height: 600px;

  ${({ theme }) => theme.media.mobile} {
    margin-left: 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 30px;
  border-bottom: solid 4px #000000;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const TitleBox = styled.div``;

const Title = styled.p`
  ${getLatoTypographyStyles('Heading3_eb')};
  margin-block-end: 0;

  ${({ theme }) => theme.media.desktop_L} {
    ${getLatoTypographyStyles('Heading2_b')}
  }

  ${({ theme }) => theme.media.mobile} {
    ${getLatoTypographyStyles('Body1_eb')}
  }
`;

const Title_KO = styled.p`
  ${getNotoTypographyStyles('Body1_b')};

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body3_b')}
  }
`;

const DescriptionBox = styled.div`
  padding-bottom: 30px;
  min-height: 40%;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const ProductName = styled(Title_KO)``;

const Detail = styled.p`
  ${getNotoTypographyStyles('Body2_r')};

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body4_r')}
  }
`;

const CarouselBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${({ theme }) => theme.media.mobile} {
    /* height: 170px; */

    display: none;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ShowMoreButton = styled(Button)`
  margin: 30px 0;
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
