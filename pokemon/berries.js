window.onload = () => {
	const options = {
	  protocol: 'https',
	  cache: true,
	  timeout: 5 * 1000 // 5s
	}
	const P = new Pokedex.Pokedex(options);
    console.log(P);

    P.getBerryByName('cheri')
    .then(function(response) {
      console.log(response);
	});

	// P.getBerryList({limit: 20}).then(response => {
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

	grabBerrys = () => {

		

	berrySearch = document.getElementById('berrySearch').value;

	P.getBerryByName(berrySearch).then(response => {
	
		let berryName = document.getElementById('berryName');
		let berryID = document.getElementById('berryID');
		let berryFirmness = document.getElementById('berryFirm');
		let berryType = document.getElementById('berryType');
		let berryPower = document.getElementById('berryPower');
		let berrySmooth = document.getElementById('berrySmooth');
		let berryGrowthTime = document.getElementById('berryGrowth');
		let berryFlavor = document.getElementById('berryFlavor');

		//Set the innerHTML to blank so it resets once the button is clicked
		berryFlavor.innerHTML = ' ';

		const name = response.name;
		const id = response.id;
		const firmness = response.firmness.name;
		const type = response.natural_gift_type.name;
		const power = response.natural_gift_power;
		const smoothness = response.smoothness;
		const growthTime = response.growth_time;
		const flavors = response.flavors;

		berryName.innerText = `Berry Name: ${name}`;
		berryID.innerText = `Berry ID: ${id}`;
		berryFirmness.innerText = `Berry Firmness: ${firmness}`;
		berryType.innerText = `Berry Type: ${type}`;
		berryPower.innerText = `Berry Power: ${power}`;
		berryGrowthTime.innerText = `Berry Growth Time: ${growthTime} Hours`;
		berrySmooth.innerText = `Berry Smoothness: ${smoothness}`;

		flavors.forEach(element => {
			berryFlavor.innerHTML += `<h4>- ${element.flavor.name}<br></h4>`;
			})
		})
	}
}