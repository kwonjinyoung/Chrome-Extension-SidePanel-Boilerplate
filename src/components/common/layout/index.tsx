import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from './styles';

function Layout(): JSX.Element {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Layout;
