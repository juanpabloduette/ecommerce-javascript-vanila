const showProductsContent = document.getElementById("show-products");
const showCart = document.getElementById("cart");
const modal = document.getElementById("modal-content");
const countProducts = document.getElementById("count-products");
const showAddedProduct = document.getElementById("showaddedproduct");
const productsCategoriesTitle = document.getElementById(
	"products-categories-title"
);
const navBar = document.getElementById("navbar");
const home = document.getElementById("home");
const search = document.getElementById("search");
const searchProducts = document.querySelector(".search__products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const showProducts = async () => {
	const URL_API = "./src/api/api.json";
	const response = await fetch(URL_API);
	const data = await response.json();
	function productsAleatories(data) {
		let dataDuplicate = data.slice(0);
		let productsAleatories = [];
		for (let i = 0; i < 20; i++) {
			let indexAleatory = Math.floor(Math.random() * dataDuplicate.length);
			productsAleatories.push(dataDuplicate[indexAleatory]);
			dataDuplicate.splice(
				indexAleatory,
				1
			); /* quitamos el elemento para que no se repita  */
		}
		return productsAleatories;
	}
	navBar.addEventListener("click", (e) => {
		(e.target.textContent.toUpperCase() !== e.target.textContent)&&(e.target.textContent.length < 200) &&
			(productsCategoriesTitle.innerText = e.target.textContent);
			searchProducts.innerHTML = "";
			search.value = "";
		switch (e.target.textContent) {
			case "Anime":
				const productsAnime = data.filter(
					(product) => product.category === "anime"
				);
				return renderProducts(productsAnime);
			case "Cartoons":
				const productsCartoons = data.filter(
					(product) => product.category === "cartoons"
				);
				return renderProducts(productsCartoons);
			case "Gamer":
				const productsGamer = data.filter(
					(product) => product.category === "gamer"
				);
				return renderProducts(productsGamer);
			case "Clubber":
				const productsClubber = data.filter(
					(product) => product.category === "clubber"
				);
				return renderProducts(productsClubber);
			case "Sports":
				const productsSports = data.filter(
					(product) => product.category === "sports"
				);
				return renderProducts(productsSports);
			case "Series":
				const productsSeries = data.filter(
					(product) => product.category === "series"
				);
				return renderProducts(productsSeries);
			case "Music":
				const productsMusic = data.filter(
					(product) => product.category === "music"
				);
				return renderProducts(productsMusic);
			case "Movies":
				const productsMovies = data.filter(
					(product) => product.category === "movies"
				);
				return renderProducts(productsMovies);
			case "Super Heroes":
				const productsHeroes = data.filter(
					(product) => product.category === "super-heroes"
				);
				return renderProducts(productsHeroes);
			case "Dragon Ball Z":
				const productsDbz = data.filter((product) => product.target === "dbz");
				return renderProducts(productsDbz);
			case "Hunter X":
				const productsHunterx = data.filter(
					(product) => product.target === "hunter-x"
				);
				return renderProducts(productsHunterx);
			case "My Hero Academia":
				const productsMyHero = data.filter(
					(product) => product.target === "my-hero-academia"
				);
				return renderProducts(productsMyHero);
			case "Naruto":
				const productsNaruto = data.filter(
					(product) => product.target === "Naruto"
				);
				return renderProducts(productsNaruto);
			case "Kimetsu no Yaiba":
				const productsKimetsu = data.filter(
					(product) => product.target === "kimetsu-no-yaiba"
				);
				return renderProducts(productsKimetsu);
			case "One Piece":
				const productsOnePiece = data.filter(
					(product) => product.target === "one-piece"
				);
				return renderProducts(productsOnePiece);
			case "The Simpsons":
				const productsSimpsons = data.filter(
					(product) => product.target === "simpsons"
				);
				return renderProducts(productsSimpsons);
			case "Rick and Morty":
				const productsRick = data.filter(
					(product) => product.target === "rick-and-morty"
				);
				return renderProducts(productsRick);
			case "Boris Brejcha":
				const productsBoris = data.filter(
					(product) => product.target === "boris-brejcha"
				);
				return renderProducts(productsBoris);
			case "John Digweed":
				const productsDigweed = data.filter(
					(product) => product.target === "digweed"
				);
				return renderProducts(productsDigweed);
			case "Hernan Cattaneo":
				const productsCattaneo = data.filter(
					(product) => product.target === "cattaneo"
				);
				return renderProducts(productsCattaneo);
			case "Miss Monique":
				const productsMiss = data.filter(
					(product) => product.target === "miss-monique"
				);
				return renderProducts(productsMiss);
			case "Tomorrowland":
				const productsTomorrowland = data.filter(
					(product) => product.target === "tomorrowland"
				);
				return renderProducts(productsTomorrowland);
			case "Age of Empires":
				const productsAeo = data.filter((product) => product.target === "aeo");
				return renderProducts(productsAeo);
			case "Assassin's Creed":
				const productsAssasins = data.filter(
					(product) => product.target === "assassins-creed"
				);
				return renderProducts(productsAssasins);
			case "Battlefield":
				const productsBattlefield = data.filter(
					(product) => product.target === "Battlefield"
				);
				return renderProducts(productsBattlefield);
			case "Dota":
				const productsDota = data.filter((product) => product.target === "Dota");
				return renderProducts(productsDota);
			case "Counter Strike 2":
				const productsCounterStrike = data.filter(
					(product) => product.target === "counter-strike"
				);
				return renderProducts(productsCounterStrike);
			case "Fall Guys":
				const productsFallGuys = data.filter(
					(product) => product.target === "Fall-Guys"
				);
				return renderProducts(productsFallGuys);
			case "Fortnite":
				const productsFortnite = data.filter(
					(product) => product.target === "fortnite"
				);
				return renderProducts(productsFortnite);
			case "Gta":
				const productsGta = data.filter((product) => product.target === "gta");
				return renderProducts(productsGta);
			case "League of Legends":
				const productsLol = data.filter(
					(product) => product.target === "League-of-Legends"
				);
				return renderProducts(productsLol);
			case "Minecraft":
				const productsMinecraft = data.filter(
					(product) => product.target === "minecraft"
				);
				return renderProducts(productsMinecraft);
			case "Overwatch":
				const productsOverwatch = data.filter(
					(product) => product.target === "overwatch"
				);
				return renderProducts(productsOverwatch);
			case "Playerunknown's Battlegrounds":
				const productsPubg = data.filter((product) => product.target === "pubg");
				return renderProducts(productsPubg);
			case "Starcraft 2":
				const productsStarcraft = data.filter(
					(product) => product.target === "starcraft"
				);
				return renderProducts(productsStarcraft);
			case "World of Warcraft":
				const productsWow = data.filter((product) => product.target === "wow");
				return renderProducts(productsWow);
			case "Valorant":
				const productsValorant = data.filter(
					(product) => product.target === "valorant"
				);
				return renderProducts(productsValorant);
			case "Harry Potter":
				const productsPotter = data.filter(
					(product) => product.target === "harry-potter"
				);
				return renderProducts(productsPotter);
			case "The Lord of the Rings":
				const productsRings = data.filter(
					(product) => product.target === "the-lord-of-the-rings"
				);
				return renderProducts(productsRings);
			case "Star Wars":
				const productsStarWars = data.filter(
					(product) => product.target === "star-wars"
				);
				return renderProducts(productsStarWars);
			case "The Mandalorian":
				const productsMandalorian = data.filter(
					(product) => product.target === "the-mandalorian"
				);
				return renderProducts(productsMandalorian);
			case "River Plate":
				const productsRiver = data.filter(
					(product) => product.target === "river-plate"
				);
				return renderProducts(productsRiver);
			case "Boca Juniors":
				const productsBoca = data.filter(
					(product) => product.target === "boca-juniors"
				);
				return renderProducts(productsBoca);
			case "Racing Club":
				const productsRacing = data.filter(
					(product) => product.target === "racing-club"
				);
				return renderProducts(productsRacing);
			case "Lionel Messi":
				const productsMessi = data.filter(
					(product) => product.target === "lionel-messi"
				);
				return renderProducts(productsMessi);
			default:
				// console.log('default')
				// console.log(e.target.textContent.length)
				break;
		}
	});

	const renderProducts = (param) => {
		showProductsContent.innerHTML = "";
		param.forEach((product) => {
			const article = document.createElement("article");
			article.className = "article";
			article.innerHTML = `
			<img src="${product.img}" alt="${product.title}" >
			<p class="article__title">${product.title}</p>
			<p class="article__category">Categoría: ${product.category}</p>
			<p class="article__price">$${product.price}</p>
			`;
			showProductsContent.append(article);
			const addProduct = document.createElement("button");
			addProduct.innerHTML = svgCart;
			addProduct.className = "btn-add";
			article.append(addProduct);
			addProduct.addEventListener("click", (e) => {
				const repeatProduct = cart.some(
					(repeatProduct) => repeatProduct.id === product.id
				);
				if (repeatProduct) {
					cart.map((prod) => {
						if (prod.id === product.id) {
							if(prod.quantity < product.stock){
								prod.quantity++;
								addedProduct(product.title);
							}else{
								// alert('No hay mas stock')
								Toastify({
									text: `No hay más stock`,
									className: "info",
									duration: 1000,
									gravity: "bottom",
									position: 'center',
									close: true,
									style: {
										background: "#dc3545",
									}
								}).showToast();
							}
						}
					});
				} else {
					cart.push({
						id: product.id,
						title: product.title,
						img: product.img,
						price: product.price,
						quantity: product.quantity,
						stock: product.stock,
					});
					addedProduct(product.title);
				}
				
				renderCart(e); // que detecta el target para que no se abra el carrito cuando se agrega un producto al carrito.
				cartCounter();
				saveLocalStorage();
			});
		});
	};

	/* BUTTON HOME MENU */
	home.addEventListener("click",() => {
		renderProducts(productsAleatories(data));
		productsCategoriesTitle.innerText = "PRODUCTOS DESTACADOS"
	})

	renderProducts(productsAleatories(data));

	/* BARRA DE BUSQUEDA*/
	search.addEventListener("input",(e) => {
		searchProducts.innerHTML = "";
		// search.addEventListener("blur",()=>{
		// 	searchProducts.innerHTML = "";
		// })
		productsCategoriesTitle.innerText = "Busqueda personalizada"
			if(e.target.value === ""){
				productsCategoriesTitle.innerText = "Productos destacados";
				renderProducts(productsAleatories(data));
			}else if(e.target.value === " "){
				showProductsContent.innerHTML = "Ingrese datos para la busqueda o seleccione una opción desde CATEGORIAS en el menú";
			}else {
				const filteredData = data.filter(item => 
					item.title.toLowerCase().includes(e.target.value.toLowerCase()) 
					||
					item.category.toLowerCase().includes(e.target.value.toLowerCase()) 
					||
					item.target.toLowerCase().includes(e.target.value.toLowerCase())
				);
				(filteredData.length == 0)
				? 
				showProductsContent.innerHTML = "No se encontraron resultados"
				:
				renderProducts(filteredData);
				searchProducts.innerHTML = `"${filteredData.length}" productos encontrados`
			}
	})
};

const addedProduct = (titleadded) => {
	Toastify({
		text: `Se agregó mouse pad ${titleadded} al carrito `,
		className: "info",
		duration: 1000,
		gravity: "bottom",
		position: 'center',
		close: true,
		style: {
			background: "#015c01",
		}
	}).showToast();
};

const saveLocalStorage = () => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

showProducts();



const pagos = document.querySelector(".pagos");
const imagesPagos = ["./src/assets/images/mastercard.png","./src/assets/images/visa.png","./src/assets/images/amex.png","./src/assets/images/cabal.png","./src/assets/images/diners.png","./src/assets/images/tarjeta-naranja.png","./src/assets/images/mercadopago.png","./src/assets/images/pagofacil.png","./src/assets/images/rapipago.png"]

imagesPagos.forEach((img) => {
	pagos.innerHTML += `<img src="${img}" alt='${img}' />`
})
