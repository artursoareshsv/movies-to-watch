import { useState } from 'react';
import { MovieCard } from './components/MovieCard';
import { movies } from './data';
import './style.css';

function App() {
	const [list, setList] = useState(movies);

	function includes(value1, value2) {
		return value1.toLowerCase().includes(value2.toLowerCase());
	}

	function search(value) {
		const filteredList = movies.filter(
			(movie) => includes(movie.name, value) || includes(movie.category, value) || includes(movie.ageRating, value)
		);

		setList(filteredList);
	}

	return (
		<div className='container'>
			<input type='text' onChange={(event) => search(event.target.value)} />

			<div className='list'>
				{list.map((item) => (
					<MovieCard key={item.name} movie={item} />
				))}
			</div>
		</div>
	);
}

export default App;
