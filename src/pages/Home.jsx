import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to fetch popular movies.");
            } finally {
                setLoading(false);
            }
        }
    }, [])

    //const movies = getPopularMovies(); get the movies from the API but iit does so over and over 


    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for: ${searchQuery}`);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search movies..." 
                    classNaem="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}    
                />
                <button type="submit" className="search-button">Search</button>

            </form>

                {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div> 
            ) : (
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            )}
        </div>
    )
}



export default Home;


/* using states for searches without API calls
function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Inception", release_date: "2010" },
        { id: 2, title: "The Dark Knight", release_date: "2008" },
        { id: 3, title: "Interstellar", release_date: "2014" }
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for: ${searchQuery}`);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search movies..." 
                    classNaem="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}    
                />
                <button type="submit" className="search-button">Search</button>

            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                   movie.title.toLowerCase().startsWith(searchQuery) &&
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
*/