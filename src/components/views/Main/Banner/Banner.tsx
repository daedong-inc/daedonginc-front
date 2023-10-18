import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './Banner.style';

// swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CustomSwiper.css';

export interface CarouselDataType {
  img: string;
  title: string;
  description: JSX.Element;
}

const Banner = () => {
  const CarouselData: CarouselDataType[] = [
    {
      img: 'src/assets/Main/banner1.jpg',
      title: 'COSMETIC',
      description: (
        <>
          뛰어난 기술력을 바탕으로 고품질의 제품을
          <br />
          지속적으로 개발하고 있습니다.
        </>
      ),
    },
    {
      img: `https://picsum.photos/1440/980?random=${Math.random()}`,
      title: '2',
      description: 'fsdcsdfasdfasdf.',
    },
    {
      img: `https://picsum.photos/1440/980?random=${Math.random()}`,
      title: '3',
      description: 'fsdcsdfasdfasdf.',
    },
    {
      img: `https://picsum.photos/1440/980?random=${Math.random()}`,
      title: '4',
      description: 'fsdcsdfasdfasdf.',
    },
  ];

  return (
    <S.Wrapper>
      <S.CarouselBox>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.left-button',
            nextEl: '.right-button',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            // bulletActiveClass: 'pagination-bullet-bullet-active',
            renderBullet: function (index, className) {
              return `<span class="${className}">${index + 1}</span>`;
            },
          }}
          loop={true}
        >
          {CarouselData.map((carouselItem, idx) => (
            <SwiperSlide key={`carousel${idx}`}>
              <S.SwiperWrapper img={carouselItem.img}>
                <S.Title>{carouselItem.title}</S.Title>
                <S.Description>{carouselItem.description}</S.Description>
                <S.ScrollIcon src="src/assets/icons/scroll.svg" />
              </S.SwiperWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
        <S.SwiperControlBox>
          <S.LeftButton className="left-button">
            <S.ArrowIconStyled />
          </S.LeftButton>
          <S.PaginationBulletBox className="swiper-pagination">
            <S.PaginationBullet className="swiper-pagination-bullet" />
          </S.PaginationBulletBox>
          <S.RightButton className="right-button">
            <S.ArrowIconStyled />
          </S.RightButton>
        </S.SwiperControlBox>
      </S.CarouselBox>
    </S.Wrapper>
  );
};

export default Banner;
