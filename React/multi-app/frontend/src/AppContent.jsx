import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import NavBar from "./components/NavBar";
import QRCodeGenerator from "./components/QRCodeGenerator";
import IPAddressFinder from "./components/IPAddressFinder";
import MovieSearchEngine from "./components/MovieSearchEngine";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import LanguageTranslator from "./components/LanguageTranslator";
import { UserContext } from "./contexts/UserProvider";
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/App.css";

const AppContent = () => {
  const { isLoggedIn, logout, users } = useContext(UserContext);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return navigate("/"); // Redireciona para o login se não estiver logado
  }

  const handleLogout = () => {
    logout(); // Usa a função logout do contexto
    navigate("/"); // Redireciona para a página inicial após logout
  };

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  const handleReturn = () => {
    setCurrentComponent(null);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {isLoggedIn && (
        <>
          <div className="nav-bar-toggle" onClick={toggleNavBar}>
            <FaBars size={24} color="#2C3E50" />
          </div>
          <NavBar
            isNavBarOpen={isNavBarOpen}
            toggleNavBar={toggleNavBar}
            handleLogout={handleLogout}
            user={users[0]} // Passa o primeiro usuário para o NavBar
            handleAccess={handleAccess}
          />
          <div className="main-content">
            {currentComponent ? (
              <>
                {renderComponent()}
                <button className="return-button" onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </button>
              </>
            ) : (
              <div className="carousel-container">
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  selectedItem={carouselIndex}
                  onChange={(index) => setCarouselIndex(index)}
                  className="custom-carousel"
                  showThumbs={false}
                >
                  <div className="carousel-item">
                    <h2>QR Code Generator</h2>
                    <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
                      Acessar
                    </button>
                  </div>
                  <div className="carousel-item">
                    <h2>IP Address Finder</h2>
                    <button onClick={() => handleAccess(1, "IPAddressFinder")}>
                      Acessar
                    </button>
                  </div>
                  <div className="carousel-item">
                    <h2>Movie Search Engine</h2>
                    <button onClick={() => handleAccess(2, "MovieSearchEngine")}>
                      Acessar
                    </button>
                  </div>
                  <div className="carousel-item">
                    <h2>Todo App</h2>
                    <button onClick={() => handleAccess(3, "TodoApp")}>
                      Acessar
                    </button>
                  </div>
                  <div className="carousel-item">
                    <h2>Quiz App</h2>
                    <button onClick={() => handleAccess(4, "QuizApp")}>
                      Acessar
                    </button>
                  </div>
                  <div className="carousel-item">
                    <h2>Language Translator</h2>
                    <button onClick={() => handleAccess(5, "LanguageTranslator")}>
                      Acessar
                    </button>
                  </div>
                </Carousel>
              </div>
            )}
            <footer className="footer">© 2024 Your Company | All rights reserved</footer>
          </div>
        </>
      )}
    </div>
  );
};

export default AppContent;
