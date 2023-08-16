import styled from 'styled-components';
import Banner from '@components/views/Main/Banner';
import Introduction from '@components/views/Main/Introduction';
import CustomerService from '@components/views/Main/CustomerService';
import Footer from '@components/views/Main/Footer';

const Main = () => {
  return (
    <Container>
      <Banner />
      <BodyContainer>
        <Introduction />
      </BodyContainer>
      <CustomerService />
      <Footer />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  text-align: center;
`;

const BodyContainer = styled(Container)`
  width: 85%;
  max-width: 1580px;
  display: flex;
`;
