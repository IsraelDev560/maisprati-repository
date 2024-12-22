import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Movies } from './components/Home/Pages/Movies';
import Layout from './components/Layout';
import NoPage from './components/Home/Pages/NoPage';
import { Users } from './components/Home/Pages/Users';
import SimpleLayout from './components/SimpleLayout';
import { UserProvider } from './components/contexts/UserContext'; // Importando o Provider
import { SearchResults } from "./components/Home/Pages/SearchResults";
import { Home } from "./components/Home/Pages/Home";
import ProtectedRoute from "./components/Home/Pages/ProtectedRoutes";
import { MovieDetails } from "./components/Home/Pages/MovieDetails";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Movies' element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            } />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route element={<SimpleLayout />}>
            <Route path="/Users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
