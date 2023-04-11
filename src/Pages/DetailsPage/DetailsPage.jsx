
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import App from '../../App';


function DetailsPage() {
	const appContext = useContext(App);
	const params = useParams();

	const pokemon = appContext.pokemons.find((element) => {
		return element.name === params.name;
	});

	return (
		<div>
			<p>Details</p>
			{pokemon ? (
				<h1>{pokemon.name}</h1>
			) : (
				<h1>Pokemon não encontrado</h1>
			)}
			<Link to="/">Voltar</Link>
		</div>
	);
}

export default DetailsPage;
