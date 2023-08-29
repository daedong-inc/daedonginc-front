import styled from 'styled-components';
import {
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import Button from '@components/common/Button/Button';
import { ReactComponent as Logo } from 'assets/대동로고.svg';
import theme from 'theme';

const News = () => {
  const newsDatas = [
    {
      id: 1,
      title: '대동아이앤씨 6월 신제품',
      date: '2023.02.02',
      img: `https://picsum.photos/342/150?random=${Math.random()}`,
    },
    {
      id: 2,
      title: '재활용 가능한 친환경 튜브용기 출시',
      date: '2023.02.02',
    },
    {
      id: 3,
      title: '대한민국 우수기업 2회연속 수상',
      date: '2023.02.02',
    },
    {
      id: 4,
      title: '대한민국 우수기업 2회연속 수상',
      date: '2023.02.02',
    },
  ];

  const isDeskTop_L = window.innerWidth >= theme.media.desktop_L;
  const maxItems = isDeskTop_L ? 3 : 4;

  return (
    <Container>
      <NewsWrapper>
        <TitleBox>
          <Title>
            <Text_b>NEWS </Text_b>
            <Text>PRODUCT</Text>
          </Title>
          <div>
            <Button outlined size="m" buttontype="icon" />
          </div>
        </TitleBox>
        <ContentBox>
          {newsDatas.slice(0, maxItems).map((newsData) => (
            <NewsBox key={newsData.id}>
              <NewsTitleBox>
                <Tap>News</Tap>
                <NewsTitle>{newsData.title}</NewsTitle>
                <Date>{newsData.date}</Date>
              </NewsTitleBox>
              <NewsImageBox>
                {newsData.img ? (
                  <NewsImg src={newsData.img} alt="news image" />
                ) : (
                  <NoImg src={'src/assets/대동로고.svg'} />
                )}
              </NewsImageBox>
            </NewsBox>
          ))}
        </ContentBox>
      </NewsWrapper>
    </Container>
  );
};
export default News;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  margin-bottom: 5rem;
`;

const NewsWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 20px 0;
`;

const Title = styled.div`
  display: flex;
`;

const Text_b = styled.span`
  ${getLatoTypographyStyles('Heading3_eb')};
`;

const Text = styled.span`
  ${getLatoTypographyStyles('Heading3')}
`;

const ContentBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;

  ${({ theme }) => theme.media.desktop_L} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
    gap: 30px;
  }
`;

const NewsBox = styled.div`
  width: 100%;
  height: 185px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  text-align: left;
  border-top: solid 2px;
  padding-top: 20px;

  ${({ theme }) => theme.media.desktop_L} {
    flex-direction: column;
    justify-content: space-between;
    height: 514px;
  }
`;

const NewsTitleBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  width: 100%;

  ${({ theme }) => theme.media.desktop_L} {
    height: 40%;
  }
`;

const NewsImageBox = styled.div`
  width: 342px;
  height: 150px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.desktop_L} {
    width: 100%;
    height: 300px;
  }
`;

const NewsImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NoImg = styled(Logo)`
  path:not(:nth-child(12)) {
    fill: black;
  }
  height: 30.6px;
  width: auto;
`;

const Tap = styled.span`
  ${getLatoTypographyStyles('Body2')};
`;

const Date = styled(Tap)``;

const NewsTitle = styled.span`
  ${getNotoTypographyStyles('Body1_b')};
`;
