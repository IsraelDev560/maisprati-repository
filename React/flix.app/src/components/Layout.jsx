import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Verifica se a rota é uma rota dinâmica
  const isMovieDetailsPage = location.pathname.startsWith('/movie/');
  // Condicionalmente exibir navegação com base na rota
  const hideNavForPaths = ['/Movies', '/Users', '/search'];
  const shouldShowNav = !hideNavForPaths.includes(location.pathname) && !isMovieDetailsPage;

  return (
    <>
      {shouldShowNav && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
