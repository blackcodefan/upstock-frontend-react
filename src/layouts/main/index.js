import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
// components
import MainNavbar from 'layouts/main/MainNavbar';
import MainFooter from 'layouts/main/MainFooter';
import { PATH_PAGE } from 'routes/paths';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  useEffect(() => {
    if (isHome) navigate(PATH_PAGE.components);
  }, [isHome, navigate]);

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}
