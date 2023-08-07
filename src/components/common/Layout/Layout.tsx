import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import { Container } from './Layout.style';

// interface Props {
//   children: React.ReactNode;
// }

const Layout = () => {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
