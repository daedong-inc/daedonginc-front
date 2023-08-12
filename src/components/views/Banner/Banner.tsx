import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './Banner.style';

// swiper style
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CustomSwiper.css';

export interface CarouselDataType {
  img: string;
  title: string;
  description: string;
}

const Banner = () => {
  const CarouselData: CarouselDataType[] = [
    {
      img: `https://picsum.photos/1440/980?random=${Math.random()}`,
      title: 'COSMETIC',
      description:
        '뛰어난 기술력을 바탕으로 고품질의 제품을 지속적으로 개발하고 있습니다.',
    },
    {
      img: `https://picsum.photos/1440/980?random=${Math.random()}`,
      title: '2',
      description: 'fsdcsdfasdfasdf.',
    },
  ];

  return (
    <S.Wrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {CarouselData.map((carouselItem, idx) => (
          <SwiperSlide key={`carousel${idx}`}>
            <S.SwiperWrapper img={carouselItem.img}>
              <S.Title>{carouselItem.title}</S.Title>
              <S.Description>{carouselItem.description}</S.Description>
            </S.SwiperWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
};

export default Banner;
