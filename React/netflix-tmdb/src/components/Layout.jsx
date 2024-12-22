import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();


  const isMovieDetailsPage = location.pathname.startsWith('/movie/');
 
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
