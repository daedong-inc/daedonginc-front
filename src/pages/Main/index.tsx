import styled from 'styled-components';
import Banner from '@components/views/Main/Banner';
import Introduction from '@components/views/Main/Introduction';
import ShowRoom from '@components/views/Main/ShowRoom';
import OurProduct from '@components/views/Main/OurProduct/OurProduct';
import Client from '@components/views/Main/Client/Client';
import News from '@components/views/Main/News';
import CustomerService from '@components/views/Main/CustomerService';
import Footer from '@components/views/Main/Footer';
import FloatingButton from '@components/common/Button/FloatingButton';

const Main = () => {
  return (
    <Container>
      <Banner />
      <MiniWidthContainer>
        <Introduction />
        <ShowRoom />
      </MiniWidthContainer>
      <OurProduct />
      <MiniWidthContainer>
        <Client />
        <News />
      </MiniWidthContainer>
      <CustomerService />
      <Footer />
      <FloatingButton />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  text-align: center;
`;

const MiniWidthContainer = styled(Container)`
  width: 85%;
  max-width: 1580px;
  display: flex;
  flex-direction: column;
`;
