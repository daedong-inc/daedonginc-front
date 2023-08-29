import styled from 'styled-components';
import {
  getLatoTypographyStyles,
  getNotoTypographyStyles,
} from 'styles/font/font';
import Button from '@components/common/Button/Button';
import { ReactComponent as ArrowCircleIcon } from '@assets/icons/arrowCircle.svg';

export interface CarouselDataType {
  img: string;
  title: string;
  description: JSX.Element;
}

const ShowRoom = () => {
  const CarouselData: CarouselDataType = {
    img: `https://picsum.photos/640/680?random=${Math.random()}`,
    title: 'HAIR & BODY',
    description: (
      <>
        드로퍼의 감성을 구현한 디자인 및 기능의 튜브 <br />
        스크류캡 상단에 별도 플립탑캡이 구성된 듀얼 캡 튜브 <br />
        액상과 밤 타입 제형의 2-in-1 컨셉으로 다양한 내용물 간의 조합 가능{' '}
        <br />
        저점도 내용물을 한 방울씩 토출시킬 수 있는 기능의 오리피스 옵션 <br />
        튜브옵션 : Cap Metalizing
      </>
    ),
  };

  return (
    <Container>
      <ShowRoomWrapper>
        <ShowRoomTitleBox>
          <Title>Show Room</Title>
          <Subtitle>최고의 품질과 최상의 제조 서비스</Subtitle>
        </ShowRoomTitleBox>
        <ContentsBox>
          <ContentImg src={CarouselData.img}></ContentImg>
          <RightBox>
            <CategoryButtons>
              <Button size="m">Skin Care</Button>
              <Button size="m" outlined>
                Make Up
              </Button>
              <Button size="m" outlined>
                ETC
              </Button>
            </CategoryButtons>

            <Title>{CarouselData.title}</Title>
            <Discription>{CarouselData.description}</Discription>
            <CarouselButtonsContainer>
              <ArrowCircleIcon />
              <ArrowCircleIcon_R />
            </CarouselButtonsContainer>
          </RightBox>
        </ContentsBox>
      </ShowRoomWrapper>
    </Container>
  );
};
export default ShowRoom;

const Container = styled.div`
  width: 100%;
  height: 710px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  p {
    margin: 5px;
  }

  ${({ theme }) => theme.media.desktop_L} {
    height: 980px;
  }
`;

const ShowRoomWrapper = styled.div``;

const ShowRoomTitleBox = styled.div`
  height: 87px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  ${getLatoTypographyStyles('Heading3_eb')};
  margin: 20px 0;

  ${({ theme }) => theme.media.desktop_L} {
    ${getLatoTypographyStyles('Heading2_b')}
  }
`;

const Subtitle = styled.p`
  ${getNotoTypographyStyles('Body1_b')};
`;

const ContentsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
`;

const ContentImg = styled.img`
  max-width: 400px;
  height: 100%;

  ${({ theme }) => theme.media.desktop_L} {
    max-width: 640px;
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 368px;
  margin-bottom: 20px;
`;

const Discription = styled.p`
  ${getNotoTypographyStyles('Body2_r')};
`;

const CarouselButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  margin-top: 30px;
`;

const ArrowCircleIcon_R = styled(ArrowCircleIcon)`
  transform: rotate(180deg);
  transform-origin: center;
  margin-left: 10px;
`;
