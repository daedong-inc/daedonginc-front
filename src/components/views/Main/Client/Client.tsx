import styled from 'styled-components';
import {
  getNotoTypographyStyles,
  getLatoTypographyStyles,
} from 'styles/font/font';
import Button from '@components/common/Button/Button';
import { BREAKPOINT_MEDIAQUERY } from 'styles/constants';

interface ClientLogo {
  img: string;
}

interface ClientLogos {
  [key: string]: ClientLogo;
}

const Client = () => {
  const clientLogos: ClientLogos = {};

  for (let i = 1; i <= 11; i++) {
    const companyName = `company${i}`;
    clientLogos[companyName] = {
      img: `/assets/clientLogoSample.jpg`,
    };
  }

  // 반응형으로 로고 10개 9개 동작하게 다시 생각해보기
  // const isMobile = window.matchMedia(
  //   `(max-width: ${BREAKPOINT_MEDIAQUERY.tablet - 1}px) and (min-width: ${
  //     BREAKPOINT_MEDIAQUERY.mobile
  //   }px)`,
  // );
  // const logoCount = isMobile.matches ? 9 : 10;

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
        <Button outlined size="m" buttontype="text_icons" margin={'50px 0 0 0'}>
          더보기
        </Button>
      </ClientWrapper>
    </Container>
  );
};

export default Client;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.media.mobile} {
    margin: 30px 0;
  }
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

  ${({ theme }) => theme.media.mobile} {
    height: 104px;
  }
`;

const Title = styled.span`
  ${getLatoTypographyStyles('Heading3_eb')}

  ${({ theme }) => theme.media.mobile} {
    ${getLatoTypographyStyles('Body1_eb')};
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text_L = styled.span`
  ${getNotoTypographyStyles('Body1_b')}

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body3_b')};
  }
`;

const Text_S = styled.span`
  ${getNotoTypographyStyles('Body2_r')}

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body4_r')};
  }
`;

const LogoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  min-width: 872px;
  width: 100%;
  height: auto;
  padding: 40px 0;
  :nth-child(n + 11) {
    display: none;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-rows: repeat(3, calc(120px / 3));
    grid-template-columns: repeat(3, 1fr);
    min-width: 328px;
    padding: 0;
    gap: 10px;
    :nth-child(n + 10) {
      display: none;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: auto;
  height: 80%;

  ${({ theme }) => theme.media.mobile} {
    height: 70%;
    width: auto;
  }
`;
