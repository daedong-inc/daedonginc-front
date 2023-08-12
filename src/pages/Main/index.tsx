import styled from 'styled-components';
import Banner from '@components/views/Banner/Banner';
import Introduction from '@components/views/Introduction/Introductions';

const Main = () => {
  return (
    <Container>
      <Banner />
      <Container2>
        <Introduction />
      </Container2>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  text-align: center;
`;

const Container2 = styled(Container)`
  width: 874px;
`;
