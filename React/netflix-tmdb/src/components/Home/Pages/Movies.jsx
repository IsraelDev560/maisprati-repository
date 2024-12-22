import { NavbarFilmes } from '../NavbarFilmes';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoStrangerThings from '../../../assets/logo-strangerthigns.png';
import axios from 'axios';
import '../../../styles/Movies.css';
import Slider from 'react-slick'; // Importa o Slider do react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const Movies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [acaoMovies, setAcaoMovies] = useState([]);
    const [stranger, setStranger] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const fetchMovies = async (endpoint, setter) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3${endpoint}`, {
                params: {
                    api_key: apiKey,
                    page: 1,
                }
            });

            if (response.data && response.data.results) {
                setter(response.data.results);
            } else {
                setter([]);
            }
        } catch (error) {
            console.error(`Erro ao buscar filmes (${endpoint}): `, error);
        }
    };

    useEffect(() => {
        Promise.all([
            fetchMovies('/movie/top_rated', setTopRatedMovies),
            fetchMovies('/discover/movie?with_genres=18', setDramaMovies),
            fetchMovies('/discover/movie?with_genres=28', setAcaoMovies),
            fetchMovies('/search/tv?query=Stranger%20Things', setStranger)
        ]).catch((error) => {
            console.error('Erro ao buscar filmes:', error);
        });
    }, []);

    const handleSearch = (query) => {
        fetchMovies(`/search/movie?query=${query}`, setTopRatedMovies);
    };

    return (
        <>
            <main>
                <NavbarFilmes onSearch={handleSearch} />
                <div className="filmes">
                    <img src={LogoStrangerThings} alt="Logo Stranger Things" />
                    <div className='Container'>
                        {stranger.length > 0 && stranger[0]?.name && (
                            <div className='SerieContainer'>
                                <h3>{stranger[0].name}</h3>
                                <div className='list'>
                                    <span className='gray'>{new Date(stranger[0].first_air_date).getFullYear()}</span>
                                    <span className='space'>|</span>
                                    <p className='A16'> A16 </p>
                                    <span className='space'>|</span>
                                    <span className='gray'>
                                        4 Temporadas
                                    </span>
                                    <span className='space'>|</span>
                                    <span className='gray'>
                                        Ficção Cientifica
                                    </span>
                                </div>
                                <p className='description'>
                                    {stranger[0].overview || 'Descrição não disponível'}
                                </p>
                                <span className='gray'>Elenco: </span>Winona Ryder, David Harbour, Millie Bobby Brown <br />
                                <p className='gray'>Criação: <span className='white'>The Duffer Brothers</span></p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <div className='moviesPainel'>
                <div className='MoviesContainer'>
                    <h2>Mais Votados</h2>
                    <div className='MovieSection'>
                        <Slider {...settings}>
                            {topRatedMovies.length > 0 && topRatedMovies.map((movie) => (
                                <div className='MovieCard' key={movie.id}>
                                    <Link className='links' to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <h2>Dramas</h2>
                    <div className='MovieSection'>
                        <Slider {...settings}>
                            {dramaMovies.length > 0 && dramaMovies.map((movie) => (
                                <div className='MovieCard' key={movie.id}>
                                    <Link className='links' to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <h2>Ação</h2>
                    <div className='MovieSection'>
                        <Slider {...settings}>
                            {acaoMovies.length > 0 && acaoMovies.map((movie) => (
                                <div className='MovieCard' key={movie.id}>
                                    <Link className='links' to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};
