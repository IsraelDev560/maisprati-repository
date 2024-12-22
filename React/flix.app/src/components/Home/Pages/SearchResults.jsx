import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { NavbarFilmes } from '../NavbarFilmes';
import '../../../styles/Movies.css'
import Slider from 'react-slick'; // Importa o Slider do react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [searchResults, setSearchResults] = useState([]);

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
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                console.log("Bombou a pesquisa "+ query)
                const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);

                if (response.data && response.data.Search) {
                    const movies = response.data.Search;

                    const detailedMoviesPromises = movies.map(async (movie) => {
                        const detailsResponse = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
                        return detailsResponse.data;
                    });

                    const detailedMovies = await Promise.all(detailedMoviesPromises);
                    setSearchResults(detailedMovies);
                } else {
                    setSearchResults([]);
                }
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <>
            <NavbarFilmes />
            <div className="search-results">
                <div className='search-container'>
                    <h1>Resultados de busca para: "{query}"</h1>
                    <div className='MovieSection'>
                    <Slider {...settings}>
                        {searchResults.map((movie) => (
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
};
