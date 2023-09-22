import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { getNotoTypographyStyles } from 'styles/font/font';
import { CarouselDataType } from './OurProduct';

interface MobileVerSwiperProps {
  CarouselData: CarouselDataType[];
}

const SwiperMobile: React.FC<MobileVerSwiperProps> = ({ CarouselData }) => {
  return (
    <>
      <CarouselBox>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={10}
          navigation={{
            prevEl: '.left-button-ourproduct',
            nextEl: '.right-button-ourproduct',
          }}
        >
          {CarouselData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductImg src={product.img} />
              <DescriptionBox>
                <ProductName>{product.name}</ProductName>
                <Detail>{product.description}</Detail>
              </DescriptionBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselBox>
    </>
  );
};
export default SwiperMobile;

const CarouselBox = styled.div`
  width: 100%;
  min-height: 330px;
  position: relative;
  display: none;
  
  ${({ theme }) => theme.media.mobile} {
    display: block;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 170px;
`;

const DescriptionBox = styled.div`
  text-align: left;
`;

const ProductName = styled.p`
  ${getNotoTypographyStyles('Body3_b')}
`;

const Detail = styled.p`
  ${getNotoTypographyStyles('Body4_r')}
`;
