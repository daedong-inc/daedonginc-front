import styled from 'styled-components';
import { getNotoTypographyStyles } from 'styles/font/font';
import { ReactComponent as Logo } from 'assets/대동로고.svg';

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <BlackDaedongLogo />
        <Location>
          서울 중구 을지로 100 (을지로2가) 파인애비뉴 B동 23~24층
          <br />
          Copyright 2020. Hansol Paper., Ltd. All rights reserved.
        </Location>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;

  ${({ theme }) => theme.media.mobile} {
    height: 200px;
  }
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 85%;
  height: 110px;
`;

const BlackDaedongLogo = styled(Logo)`
  width: 140px;
  path:not(:nth-child(12)) {
    fill: black;
  }
`;

const Location = styled.p`
  ${getNotoTypographyStyles('Body2_r')}

  ${({ theme }) => theme.media.mobile} {
    ${getNotoTypographyStyles('Body4_r')}
  }
`;
