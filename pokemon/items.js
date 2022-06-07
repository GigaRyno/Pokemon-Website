window.onload = () => {
	const options = {
	  protocol: 'https',
	  cache: true,
	  timeout: 5 * 1000 // 5s
	}
	const P = new Pokedex.Pokedex(options);
	console.log(P);

	P.getItemByName("master-ball")
    .then(function(response) {
      console.log(response);
    })
	
	itemCheck = () => {
		let itemSearch = document.getElementById('itemSearch').value;

		P.getItemByName(itemSearch).then(response => {
			
			let itemName = document.getElementById('itemName');
			let itemID = document.getElementById('itemID');
			let itemCost = document.getElementById('itemCost');
			let itemCat = document.getElementById('itemCat');
			let itemAttributes = document.getElementById('itemAttributes');
			let itemImage = document.getElementById('itemPicture');

			//Set the innerHTML to blank so it resets once the button is clicked
			itemAttributes.innerHTML = ' ';

			const name = response.name;
			const id = response.id;
			const cost = response.cost;
			const category = response.category.name;
			const attributes = response.attributes;
			const image = response.sprites.default;

			itemName.innerText = `Item Name: ${name}`;
			itemID.innerText = `Item ID: ${id}`;
			itemCost.innerText = `Item Cost: ${cost}`;
			itemCat.innerText = `Item Category: ${category}`;
			itemImage.innerHTML = `<img src="${image}" height="400" width="400"/>`;

			attributes.forEach(element => {
				itemAttributes.innerHTML += `<h4>- ${element.name}<br></h4>`;
			});
		})
	}
}