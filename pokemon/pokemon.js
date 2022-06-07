window.onload = () => {
	const options = {
	  protocol: 'https',
	  cache: true,
	  timeout: 5 * 1000 // 5s
	}
	const P = new Pokedex.Pokedex(options);
	console.log(P);

	// Examples 
	// If you're stuck or don't know whats in your object, always console.log() the variable
	// Open up your console to see what i'm logging out

	// Fetching all pokemon
	// xhttps://github.com/PokeAPI/pokeapi-js-wrapper#root-endpoints
	P.getPokemonsList({limit: 1000}).then(response => {
		console.log(response);
		const pokemonList = response.result;
	});

	// P.getPokemonsList({limit: 20}).then(response => {
	// 	console.log(response);
	// 	const pokemonList = response.result;
	// 	const element = document.getElementById('whatever');

	// 	const imageContainer = document.getElementById('pokeIMG');
	// 	let imageList = '';
	// 	pokemonList.forEach(pokemon => {
	// 		P.getPokemonByName().then(pokeData => {
	// 			imageList += `<img src="${pokeData.sprites.front_shiny}" height="200" width="200"/>`;
	// 			pokeData.types.forEach(type => {
	// 				imageList += `<div>${type.type.name}</div>`
	// 			});
	// 			imageContainer.innerHMTL = imageList;
	// 		})
	// 	});
	// });

	PokeSearchbyinput = () => {
		let pokeSearch = document.getElementById('pokeSearch').value;

		P.getPokemonByName(pokeSearch).then(response => {
			let pokeName = document.getElementById('pokeName');
			let pokeID = document.getElementById('pokeID');
			let pokeHeight = document.getElementById('pokeHeight');
			let pokeWeight = document.getElementById('pokeWeight');
			let pokeIMG = document.getElementById('pokeIMG');
			let pokeMoves = document.getElementById('pokeMoves');
			let pokeAbil = document.getElementById('pokeAbil');

			const id = response.id;
			const name = response.name;
			const img = response.sprites.front_shiny;
			const weight = response.weight;
			const height = response.height;
			const moves = response.moves;
			const abil = response.abilities;

			//Set the innerHTML to blank so it resets once the button is clicked
			pokeMoves.innerHTML = ' ';
			pokeAbil.innerHTML = ' ';
			
			//console.log(img);

			pokeName.innerText = `Pokemon Name: ${name}`;
			pokeID.innerText = `Pokemon ID: ${id}`;
			pokeHeight.innerText = `Pokemon Height: ${height}`;
			pokeWeight.innerText = `Pokemon Weight: ${weight}`;
			pokeIMG.innerHTML = `<img src="${img}" height="400" width="400"/>`;

			console.log(abil);

			moves.forEach(element => {
				pokeMoves.innerHTML += `<p>- ${element.move.name}<br></p>`;
			})

			abil.forEach(element => {
				pokeAbil.innerHTML += `<p>- ${element.ability.name}<br></p>`;
			})
		})
	}

	// Getting a specific pokemon by name
	P.getPokemonByName("butterfree").then(function(response) {
		console.log(response);
		const id = response.id;
		const name = response.name;
		//const img = response.url; 
		console.log(`Current Name: ${name} & ID: ${id}`);
		//console.log(`${img}`);
		
	});

	// More lists of every type here 
	// https://github.com/PokeAPI/pokeapi-js-wrapper#list-of-supported-root-endpoints


	// Getting specific items, subset of items by grouping, etc
	// https://github.com/PokeAPI/pokeapi-js-wrapper#endpoints
}
