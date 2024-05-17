const showProductsContent = document.getElementById("show-products");
const showCart = document.getElementById("cart");
const modal = document.getElementById("modal-content");
const countProducts = document.getElementById("count-products");
const showAddedProduct = document.getElementById("showaddedproduct");
const productsCategoriesTitle = document.getElementById(
	"products-categories-title"
);
const navBar = document.getElementById("navbar");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let dataForSearch = [];
const showProducts = async () => {
	const URL_API = "./src/api/api.json";
	const response = await fetch(URL_API);
	const data = await response.json();
	dataForSearch = data.slice(0);
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
		e.target.textContent.toUpperCase() !== e.target.textContent &&
			(productsCategoriesTitle.innerText = e.target.textContent);

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
				break;
		}
	});



	const renderProducts = (param) => {
		showProductsContent.innerHTML = "";
		param.forEach((product) => {
			let content = document.createElement("article");
			content.className = "article";
			content.innerHTML = `
			<img src="${product.img}" alt="${product.title}" >
			<p class="article__title">${product.title}</p>
			<p class="article__category">Categoría: ${product.category}</p>
			<p class="article__price">$${product.price}</p>
			`;
			showProductsContent.append(content);
			const addProduct = document.createElement("button");
			addProduct.innerHTML = `Agregar al carrito <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" width="22px" height="22px" fill="#c0c0c0" stroke="#c0c0c0">
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<style type="text/css">
					.st0{fill:none;stroke:#c0c0c0;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
					.st1{fill:none;stroke:#c0c0c0;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;}
					.st2{fill:none;stroke:#c0c0c0;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
					.st3{fill:none;stroke:transparent;}
				</style>
				<path class="st0" d="M9,13V7c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4v6"></path>
				<circle class="st0" cx="23" cy="22" r="7"></circle>
				<line class="st0" x1="20" y1="22" x2="26" y2="22"></line>
				<line class="st0" x1="23" y1="19" x2="23" y2="25"></line>
				<polyline class="st0" points="23,29 3,29 5,9 21,9 21.6,15.1 " stroke-linecap="round"></polyline>
				<rect y="-144" class="st3" width="536" height="680"></rect>
			</g>
		</svg>`;
			addProduct.className = "btn-add";
			content.append(addProduct);

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
	renderProducts(productsAleatories(data));
	const search = document.getElementById("search");

search.addEventListener("input",(e) => {
	fetchData().then(data => {
		const filteredData = data.filter(item => 
			item.title.toLowerCase().includes(e.target.value) || item.category.toLowerCase().includes(e.target.value)
		);
		if(filteredData.length == 0){
			return showProductsContent.innerHTML = "No se encontraron resultados";
		}else{
			return renderProducts(filteredData)
		}

	})
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

/* MENU RESPONSIVE */

const categorias = document.getElementById("categorias");
const anime = document.getElementById("anime");
const dropAnimeSubMenu = document.querySelector(".dropdown-anime-submenu");
const cartoons = document.getElementById("cartoons");
const dropCartoonsSubMenu = document.querySelector(
	".dropdown-cartoons-submenu"
);
const clubber = document.getElementById("clubber");
const dropClubberSubMenu = document.querySelector(".dropdown-clubber-submenu");
const gamer = document.getElementById("gamer");
const dropGamerSubMenu = document.querySelector(".dropdown-gamer-submenu");

const menuToggle = document.querySelector(".menu-toggle");
const menuIcons = document.querySelectorAll(".menu-icon");
const dropDownContent = document.querySelector(".dropdown-content");

const anchoVentana = window.innerWidth;
const responsive = 650;

const menuIconsAnimate = () => {
	menuIcons.forEach((icon) => {
		icon.classList.toggle("open");
	});
};

if (anchoVentana < responsive) {
	categorias.addEventListener("click", () => {
		dropDownContent.style.display === "block"
			? (dropDownContent.style.display = "none")
			: (dropDownContent.style.display = "block");
	});
	anime.addEventListener("click", () => {
		dropAnimeSubMenu.style.display === "block"
			? (dropAnimeSubMenu.style.display = "none")
			: (dropAnimeSubMenu.style.display = "block");
	});
	cartoons.addEventListener("click", () => {
		dropCartoonsSubMenu.style.display === "block"
			? (dropCartoonsSubMenu.style.display = "none")
			: (dropCartoonsSubMenu.style.display = "block");
	});
	clubber.addEventListener("click", () => {
		dropClubberSubMenu.style.display === "block"
			? (dropClubberSubMenu.style.display = "none")
			: (dropClubberSubMenu.style.display = "block");
	});
	gamer.addEventListener("click", () => {
		dropGamerSubMenu.style.display === "block"
			? (dropGamerSubMenu.style.display = "none")
			: (dropGamerSubMenu.style.display = "block");
	});

	/* Click en Hamburguesa*/
	menuToggle.addEventListener("click", function () {
		menuIconsAnimate();

		navBar.style.display === "block"
			? (navBar.style.display = "none")
			: (navBar.style.display = "block");
	});

	const closeItems = document.querySelectorAll(".close");
	closeItems.forEach((item) => {
		item.addEventListener("click", () => {
			closeNavbarResponsive();
		});
	});
	const closeNavbarResponsive = () => {
		navBar.style.display = "none";
		menuIconsAnimate();
	};
}


// fetch('./src/api/api.json')
// .then(response => response.json())
// .then(response => console.log(response))


let fetchedData = []; 

async function fetchData() {
    try {
        const response = await fetch('./src/api/api.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchedData = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

	return fetchedData
}
