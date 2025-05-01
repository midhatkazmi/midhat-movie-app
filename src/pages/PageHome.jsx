import { useEffect } from "react";
import { useState } from "react";
import { getPopularMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";
import "./PageHome.css";

function PageHome() {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getPopularMovies()
			.then((data) => {
				console.log(data);
				setPopularMovies(data.results);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<main>
			<h1>Popular Movies</h1>

			{popularMovies.map((movieData) => {
				return <MovieCard key={movieData.id} movieData={movieData} />;
			})}
		</main>
	);
}

export default PageHome;
