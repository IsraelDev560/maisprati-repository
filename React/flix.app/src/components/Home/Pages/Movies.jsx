import { NavbarFilmes } from '../NavbarFilmes'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LogoStrangerThings from '../../../assets/logo-strangerthigns.png'
import axios from "axios"
import '../../../styles/Movies.css'
import Slider from 'react-slick'; // Importa o Slider do react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

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

    const fetchMovies = async (query, setter) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);

            if (response.data && response.data.Search) {
                const movies = response.data.Search;


                const detailedMoviesPromises = movies.map(async (movie) => {
                    const detailsResponse = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
                    return detailsResponse.data;
                });

                const detailedMovies = await Promise.all(detailedMoviesPromises);
                setter(detailedMovies);
            } else {

                setter([]);
            }
        } catch (error) {
            console.error(`Erro ao buscar filmes (${query}): `, error);
        }
    };

    useEffect(() => {

        Promise.all([
            fetchMovies('Marvel', setTopRatedMovies),
            fetchMovies('Drama', setDramaMovies),
            fetchMovies('Acao', setAcaoMovies),
            fetchMovies('Stranger Things', setStranger)
        ]).catch((error) => {
            console.error('Erro ao buscar filmes:', error);
        });
    }, []);


    const handleSearch = (query) => {
        fetchMovies(query, setTopRatedMovies);
    };

    return (
        <>
            <main>
                <NavbarFilmes onSearch={handleSearch} />
                <div className="filmes">
                    <img src={LogoStrangerThings} alt="Logo Stranger Things" />
                    <div className='Container'>
                        {stranger.slice(0, 1).map((movie) => (
                            <div className='SerieContainer' key={movie.imdbID}>
                                <h3>{movie.Title}</h3>
                                <div className='list'>
                                    <span className='gray'>{movie.Year}</span>
                                    <span className='space'>|</span>
                                    <p className='A16'> A16 </p>
                                    <span className='space'>|</span>
                                    <span className='gray'>4 Temporadas </span>
                                    <span className='space'>|</span>
                                    <span className='gray'> {movie.Genre}</span>
                                </div>
                                <p className='description'>
                                    Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.
                                </p>
                                <span className='gray'>Elenco: </span>{movie.Actors} <br />
                                <p className='gray'>Criação: <span className='white'>{movie.Writer}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <div className='moviesPainel'>
                <div className='MoviesContainer'>
                    <h2>Mais Votados</h2>
                    <div className='MovieSection'>
                    <Slider {...settings}>
                        {topRatedMovies && topRatedMovies.slice(0, 7).map((movie) => (
                            <div className='MovieCard' key={movie.imdbID}>
                                <Link className='links' to={`/movie/${movie.imdbID}`}>
                                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </Link>
                            </div>
                        ))}
                        </Slider>
                    </div>

                    <h2>Dramas</h2>
                    <div className='MovieSection'>
                    <Slider {...settings}>
                        {dramaMovies && dramaMovies.slice(0, 7).map((movie) => (
                            <div className='MovieCard' key={movie.imdbID}>
                                <Link className='links' to={`/movie/${movie.imdbID}`}>
                                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </Link>
                            </div>
                        ))}
                        </Slider>
                    </div>
                    <h2>Ação</h2>
                    <div className='MovieSection'>
                    <Slider {...settings}>
                        {acaoMovies && acaoMovies.slice(0, 7).map((movie) => (
                            <div className='MovieCard' key={movie.imdbID}>
                                <Link className='links' to={`/movie/${movie.imdbID}`}>
                                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </Link>
                            </div>
                        ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}
