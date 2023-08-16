import styled from 'styled-components';
import Banner from '@components/views/Banner/Banner';
import Introduction from '@components/views/Introduction/Introductions';
import Footer from '@components/views/Footer/Footer';

const Main = () => {
  return (
    <Container>
      <Banner />
      <BodyContainer>
        <Introduction />
      </BodyContainer>
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
