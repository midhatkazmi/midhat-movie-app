import { Link } from "react-router-dom";
import { IMG_BASE } from "../utils/api";
import "./MovieCard.css";

function MovieCard({ movieData }) {
	return (
		<Link to={`/movie/${movieData.id}`}>
			<article>
				<img
					src={`${IMG_BASE}/w92/${movieData.poster_path}`}
					alt={movieData.overview}
				/>
				<h2>{movieData.original_title}</h2>
				<p><small>{new Date(movieData.release_date).getFullYear()}</small></p>
				<p>{movieData.vote_average === 0 ? <>N/R</> : movieData.vote_average.toFixed(1)}</p>
				<button type="button">&#9734;</button>
			</article>
		</Link>
	);
}

export default MovieCard;
