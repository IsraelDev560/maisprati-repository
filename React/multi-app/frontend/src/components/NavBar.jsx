// components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaBars,
  FaArrowLeft
} from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import "../styles/App.css";

const NavBar = ({ isNavBarOpen, toggleNavBar, handleAccess, handleLogout, user }) => {
  return (
    <div className={`nav-bar ${isNavBarOpen ? 'nav-bar-open' : ''}`}>
      <Link className="styled-link" onClick={() => handleAccess(0, "QRCodeGenerator")}>
        <FaQrcode />
        QR Code Generator
      </Link>
      <Link className="styled-link" onClick={() => handleAccess(1, "IPAddressFinder")}>
        <FaNetworkWired />
        IP Address Finder
      </Link>
      <Link className="styled-link" onClick={() => handleAccess(2, "MovieSearchEngine")}>
        <FaSearch />
        Movie Search
      </Link>
      <Link className="styled-link" onClick={() => handleAccess(3, "TodoApp")}>
        <FaTasks />
        Todo App
      </Link>
      <Link className="styled-link" onClick={() => handleAccess(4, "QuizApp")}>
        <FaRegQuestionCircle />
        Quiz App
      </Link>
      <Link className="styled-link" onClick={() => handleAccess(5, "LanguageTranslator")}>
        <FaGlobeAmericas />
        Translator
      </Link>
      <div className="user-info">
        {user ? (
          <>
            <FaUser /> <span>{user.name}</span> {/* Exibe o nome do usuário */}
          </>
        ) : (
          <span>Guest</span> // Exibe um texto alternativo se não houver usuário
        )}
      </div>
      <button
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
