import {
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import styled from 'styled-components';
import MotosSwiper_MobileVer from './MotosSwiper_MobileVer';

export interface CompanyMoto {
  id: number;
  title: string;
  img: string;
  description: string;
}

const Introduction = () => {
  const companyMotos: CompanyMoto[] = [
    {
      id: 1,
      title: 'Qulity',
      img: '/assets/Main/Grid1.svg',
      description: '품질 환경 보증체계 및 엄격한 사후관리',
    },
    {
      id: 2,
      title: 'Honesty',
      img: '/assets/Main/Grid2.svg',
      description: '미정',
    },
    {
      id: 3,
      title: 'Sincere',
      img: '/assets/Main/Grid3.svg',
      description: '미정',
    },
  ];

  return (
    <Container>
      <Section1>
        <TextArea>
          <div>
            <Title>OUR COMPANY</Title>
          </div>
          <div>
            <Desc_b>최고의 품질과 최상의 제조 서비스 </Desc_b>
            <Desc>
              정직하고 성실하게 품질을 기본으로 고객 만족을 위해 최선을
              다하겠습니다.
            </Desc>
          </div>
        </TextArea>
        <MotosGridContainer>
          {companyMotos.map((moto) => (
            <GridItem key={moto.id}>
              <SvgImage src={moto.img} alt="회사모토" />
              <GridTitle>{moto.title}</GridTitle>
              <CenteredLine />
              <GridDescription>{moto.description}</GridDescription>
            </GridItem>
          ))}
        </MotosGridContainer>
        <MotosSwiper_MobileVer companyMotos={companyMotos} />
      </Section1>
      <Section2>
        <Title2>
          대동아이앤씨는 <br />
          분야별 전문팀으로 <br />
          정확하고 섬세하게 생산합니다.
        </Title2>
        <DiscContainer>
          <Desc>
            다양한 생산 제품에 맞는 분야별 전문팀으로 구성된 대동아이엔씨는
            <br />
            까다롭게 제품을 관리하며 좋은 품질의 제품으로 고객님께
            다가가겠습니다.
          </Desc>
        </DiscContainer>
        <Photo>
          <Section2Img src="\assets\Main\4.svg" />
        </Photo>
      </Section2>
    </Container>
  );
};
export default Introduction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Section1 = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  p {
    margin: 0;
  }

  ${({ theme }) => theme.media.mobile} {
    margin-top: 5rem;
  }
`;

const TextArea = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;

  div {
    /* margin-bottom: 30px; */
    flex: 1;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 115px;
  }
`;

const Title = styled.p`
  ${getLatoTypographyStyles('Heading3_eb')};

  ${({ theme }) => theme.media.desktop_L} {
    ${getLatoTypographyStyles('Heading2_b')}
  }

  ${({ theme }) => theme.media.mobile} {
    ${getLatoTypographyStyles('Body1_eb')}
  }
`;

const MotosGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  margin-top: 3rem;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const GridTitle = styled.div`
  ${getLatoTypographyStyles('Body1_eb')};
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  transition: bottom 0.3s ease;

  ${({ theme }) => theme.media.desktop_L} {
    ${getLatoTypographyStyles('Heading3')}
  }
`;

const SvgImage = styled.img`
  max-width: 100%;
  max-height: auto;
  transition: opacity 0.3s ease;
`;

const CenteredLine = styled.div`
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: white;
  bottom: 0%;
  transition: opacity 0.3s ease, bottom 0.3s ease;
  opacity: 0;
`;

const GridDescription = styled.div`
  position: absolute;
  color: white;
  bottom: 0%;
  transition: opacity 0.3s ease, bottom 0.3s ease;
  opacity: 0;
  // 여기 폰트 정해지면 수정
  ${getNotoTypographyStyles('Body2_b')}

  ${({ theme }) => theme.media.desktop_L} {
    ${getNotoTypographyStyles('Body2_b')}
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00bad0;
    & > ${GridTitle} {
      bottom: 50%;
    }
    & > ${SvgImage} {
      opacity: 0;
    }
    & > ${CenteredLine} {
      opacity: 1;
      bottom: 50%;
    }
    & > ${GridDescription} {
      opacity: 1;
      bottom: 20%;
    }
  }
`;

const Section2 = styled(Section1)`
  align-items: flex-start; /* 부모 요소의 수직 정렬을 왼쪽으로 변경 */
  text-align: left;
`;

const Photo = styled.div`
  width: 100%;
  max-height: 255px;
  margin: 10px 0 30px 0;

  ${({ theme }) => theme.media.desktop_L} {
    max-height: 460px;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100vw;
    height: 170px;
    align-self: center;
  }
`;

const Section2Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DiscContainer = styled.div`
  margin: 1.5rem 0;

  ${({ theme }) => theme.media.mobile} {
    margin: 0.5rem 0;
  }
`;

//font
const Desc_b = styled.p`
  ${getNotoTypographyStyles('Body1_b')};

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body3_b')}
    margin-bottom: 5px;
  }
`;

const Desc = styled.p`
  ${getNotoTypographyStyles('Body2_r')};

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body4_r')}
  }
`;

const Title2 = styled.p`
  ${getNotoTypographyStyles('Heading2')}

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body2_b')}
  }
`;
