import { NavbarFilmes } from '../NavbarFilmes'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import axios from "axios"
import '../../../styles/MoviesDetails.css'

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do filme:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <NavbarFilmes />
            <div className="movie-details">
                <div className="movie-poster">
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                </div>
                <div className="movie-info">
                    <h1>{movie.Title}</h1>
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Plot:</strong> {movie.Plot}</p>
                    <p><strong className="imdb-rating">IMDB Rating:</strong> {movie.imdbRating}</p>
                    <p><strong>Runtime:</strong> {movie.Runtime}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                    <p><strong>Country:</strong> {movie.Country}</p>
                </div>
            </div>
        </>
    );
};
