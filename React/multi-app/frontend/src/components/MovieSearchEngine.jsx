import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import '../styles/MovieSearchEngine.css'

// Componente principal MovieSearchEngine
const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
  const [erros, setErros] = useState('');
  // Função para buscar filmes
  const searchMovies = async () => {
    try {
      setErros(''); // Limpa os erros antes de uma nova busca
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=403abbfe`); // Faz uma requisição GET para a API OMDB
      if (response.data.Response === false) {
        setErros('Nenhum filme encontrado.'); // Define a mensagem de erro se não houver filmes
        setMovies([]); // Limpa a lista de filmes
      } else {
        setMovies(response.data.Search); // Armazena os dados dos filmes no estado movies
      }
    } catch (error) {
      setErros('Ocorreu um erro ao buscar os filmes. Por favor, tente novamente.'); // Define uma mensagem de erro genérica
      console.error("Error fetching movie data:", error); // Exibe um erro no console em caso de falha
    }
  };

  return (
    <div className='container'>
      <h2>Movie Search Engine</h2>
      <input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <button onClick={searchMovies}>Search</button> {/* Botão que chama a função searchMovies quando clicado */}

      {/* Exibe mensagem de erro, se houver */}
      {erros && <p className="error-message">{erros}</p>}

      <div className='movies-container'>
        {movies && movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
          <div className='movie-card' key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} /> {/* Exibe o pôster do filme */}
            <h3>{movie.Title}</h3> {/* Exibe o título do filme */}
            <p>{movie.Year}</p> {/* Exibe o ano do filme */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
