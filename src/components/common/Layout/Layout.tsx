import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import { NavContainer, Container } from './Layout.style';

// interface Props {
//   children: React.ReactNode;
// }

const Layout = () => {
  return (
    <>
      <NavContainer>
        <Nav />
      </NavContainer>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
