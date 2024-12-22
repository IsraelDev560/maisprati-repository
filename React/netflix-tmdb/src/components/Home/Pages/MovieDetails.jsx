import { NavbarFilmes } from '../NavbarFilmes';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../styles/MoviesDetails.css';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,images`);
                setMovie(response.data);
            } catch (error) {
                setError('Erro ao buscar detalhes do filme.');
                console.error('Erro ao buscar detalhes do filme:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!movie) {
        return <div>Filme não encontrado.</div>;
    }

    return (
        <>
            <NavbarFilmes />
            <div className="movie-details">
                <div className="movie-poster">
                    {movie.poster_path && (
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    )}
                </div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <p><strong>Year:</strong> {new Date(movie.release_date).getFullYear()}</p>
                    <p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                    <p><strong>Director:</strong> {movie.credits?.crew?.find(member => member.job === 'Director')?.name || 'N/A'}</p>
                    <p><strong>Actors:</strong> {movie.credits?.cast?.slice(0, 5).map(actor => actor.name).join(', ') || 'N/A'}</p>
                    <p><strong>Plot:</strong> {movie.overview}</p>
                    <p><strong className="imdb-rating">Rating:</strong> {movie.vote_average}</p>
                    <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                    <p><strong>Language:</strong> {movie.original_language}</p>
                    <p><strong>Country:</strong> {movie.production_countries.map(country => country.name).join(', ')}</p>
                </div>
                {movie.videos?.results?.length > 0 && (
                    <div className="movie-videos">
                        <h2>Videos</h2>
                        {movie.videos.results.map(video => (
                            <div key={video.id} className="video-item">
                                <iframe
                                    title={video.name}
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                )}
                {movie.images?.posters?.length > 0 && (
                    <div className="movie-images">
                        <h2>Images</h2>
                        <div className="image-gallery">
                            {movie.images.posters.map(image => (
                                <img
                                    key={image.file_path}
                                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                                    alt={movie.title}
                                    className="gallery-image"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
