import styled from 'styled-components';
import {
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import Button from '@components/common/Button/Button';

interface ClientLogo {
  img: string;
}

interface ClientLogos {
  [key: string]: ClientLogo;
}

const Client = () => {
  const clientLogos: ClientLogos = {};

  for (let i = 1; i <= 10; i++) {
    const companyName = `company${i}`;
    clientLogos[companyName] = {
      img: `src/assets/clientLogoSample.jpg`,
    };
  }

  return (
    <Container>
      <ClientWrapper>
        <TitleBox>
          <Title>OUR CLIENT</Title>
          <Subtitle>
            <Text_L>주요 거래처 현황</Text_L>
            <Text_S>그 외 50여개의 고객사와 함께합니다.</Text_S>
          </Subtitle>
        </TitleBox>
        <LogoBox>
          {Object.keys(clientLogos).map((companyName, idx) => (
            <LogoWrapper>
              <Logo
                key={`clientLogo${idx}`}
                src={clientLogos[companyName].img}
                alt={`${companyName} image`}
              />
            </LogoWrapper>
          ))}
        </LogoBox>
        <Button outlined size="m" buttontype="text_icons">
          더보기
        </Button>
      </ClientWrapper>
    </Container>
  );
};

export default Client;

const Container = styled.div`
  width: 100%;
  height: 560px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ClientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: auto;
  height: 147px;
  margin: 10px;
`;

const Title = styled.span`
  ${getLatoTypographyStyles('Heading3_eb')}
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text_L = styled.span`
  ${getNotoTypographyStyles('Body1_b')}
`;

const Text_S = styled.span`
  ${getNotoTypographyStyles('Body2_r')}
`;

const LogoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  min-width: 872px;
  height: auto;
  padding: 40px 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: auto;
  height: 80%;
`;
