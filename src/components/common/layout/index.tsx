/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 * - /기획/라우팅_기획.md
 */
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
