import { useState } from "react";
import "./PageSingleMovie.css";
import { useEffect } from "react";
import { getMovieById, IMG_BASE } from "../utils/api";
import { useParams } from "react-router-dom";

function PageSingleMovie() {
	const [movieData, setMovieData] = useState();
	const { id } = useParams();

	useEffect(() => {
		getMovieById(id)
			.then((data) => {
				console.log(data);
				setMovieData(data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<main>
			{movieData && (
				<>
					{/* <div className="backdrop-container"> */}
					<img
						className="backdrop"
						src={`${IMG_BASE}/w300/${movieData.backdrop_path}`}
						alt=""
					/>
					{/* </div> */}
					<h1>{movieData.title}</h1>
					<h2>{movieData.release_date}</h2>
					<button>&#9734;</button>
				</>
			)}
		</main>
	);
}

export default PageSingleMovie;
