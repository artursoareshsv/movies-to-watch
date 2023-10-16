import { object } from 'prop-types';

export function MovieCard(props) {
	return (
		<div className='movie'>
			<img src={props.movie.poster} alt={`${props.movie.name} poster`} />

			<div className='movie-content'>
				<h3>{props.movie.name}</h3>
				<p>{props.movie.category}</p>
				<p>{props.movie.ageRating}</p>
			</div>
		</div>
	);
}

MovieCard.propTypes = {
	movie: object.isRequired,
};
