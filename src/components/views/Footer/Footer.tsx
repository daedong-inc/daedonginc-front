import styled from 'styled-components';
import { getNotoTypographyStyles } from 'styles/font/font';
import Button from '@components/common/Button/Button';
import { ReactComponent as CommunicationIcon } from 'assets/icons/communication.svg';
import { ReactComponent as MailIcon } from 'assets/icons/mail-pencil.svg';

const Footer = () => {
  const information = {
    number: '080.12.4567',
    businessHours: 'AM 09:00-PM 06:00',
    lunchBreak: 'AM 12:00-PM 01:00 ',
  };
  return (
    <Container>
      <CustomerServiceConstiner>
        <CompanyInformation>
          <NumberContainer>
            고객센터
            <br />
            {information.number}
          </NumberContainer>
          <HourContainer>
            운영시간 | {information.businessHours}
            <br />
            점심시간 | {information.lunchBreak}
          </HourContainer>
        </CompanyInformation>
        <QnAContainer>
          <QnAWrapper>
            <LeftContainer>
              <CommunicationIcon width="30px" height="30px" />
              <QnATitle>자주묻는질문</QnATitle>
            </LeftContainer>
            <div>
              {/* <div>
                자주 질문하시는 문의사항을 분야별로
                <br /> 정리하여 보실 수 있습니다.
              </div> */}
              <Button buttontype="text_icons" size="m" outlined>
                더보기
              </Button>
            </div>
          </QnAWrapper>
          <StyledVerticalLine />
          <QnAWrapper>
            <LeftContainer>
              <MailIcon width="30px" height="30px" />
              <QnATitle>문의하기</QnATitle>
            </LeftContainer>
            <div>
              {/* <div>
              문의사항이나 견적에 대한 사항을 전달주시면
              <br /> 검토 후 회신 드립니다.
              </div> */}
              <Button buttontype="text_icons" size="m" outlined>
                더보기
              </Button>
            </div>
          </QnAWrapper>
        </QnAContainer>
      </CustomerServiceConstiner>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  width: 100%;
  height: 391px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: black;
`;

const CustomerServiceConstiner = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 280px auto;
`;

const CompanyInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 262px;
  height: 187px;
  color: white;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 2rem 0 0;
`;

const NumberContainer = styled.div`
  ${getNotoTypographyStyles('Heading2')}
`;

const HourContainer = styled.div`
  ${getNotoTypographyStyles('Body2_r')}
`;

const QnAContainer = styled.div`
  ${getNotoTypographyStyles('Body2_r')}
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  padding: 1.5rem;
  background-color: white;
`;

const QnAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-right: 2px solid #bdbdbd; */
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const QnATitle = styled.p`
  ${getNotoTypographyStyles('Body1_b')}
  margin-left: 1rem;
`;

const StyledVerticalLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: #ccc;
`;
