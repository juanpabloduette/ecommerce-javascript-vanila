const showProductsContent = document.getElementById("show-products");
const showCart = document.getElementById("cart");
const modal = document.getElementById("modal-content");
const countProducts = document.getElementById("count-products");
const showAddedProduct = document.getElementById("showaddedproduct");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const showProducts = async () => {
	const URL_API = "./src/api/api.json";
	const response = await fetch(URL_API);
	let data = await response.json();
	addEventListener("click", (e) => {
		// console.log(e.target);
		switch (e.target.textContent) {
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
			case "PUBG":
				const productsPubg = data.filter((product) => product.target === "pubg");
				return renderProducts(productsPubg);
			case "Valorant":
				const productsValorant = data.filter(
					(product) => product.target === "valorant"
				);
				return renderProducts(productsValorant);

			default:
				break;
		}
		// if (e.target.textContent === "Dota") {
		// 	const dataDota = data.filter((product) => product.target === "Dota");
		// 	console.log(dataDota);
		// 	return renderProducts(dataDota);
		// }
	});

	const renderProducts = (param) => {
		showProductsContent.innerHTML = "";
		param.forEach((product) => {
			let content = document.createElement("article");
			content.className = "article";
			content.innerHTML = `
			<img src="${product.img}" alt="${product.title}" >
			<p>${product.title}</p>
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
					.st3{fill:none;stroke:transparent;} /* Cambiamos el color de la línea a transparente */
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
							prod.quantity++;
						}
					});
				} else {
					cart.push({
						id: product.id,
						title: product.title,
						img: product.img,
						price: product.price,
						quantity: product.quantity,
					});
				}
				const titleAdded = product.title;
				addedProduct(titleAdded);

				renderCart(e); // que detecta el target para que no se abra el carrito cuando se agrega un producto al carrito.
				cartCounter();
				saveLocalStorage();
			});
		});
	};
	renderProducts(data);
};

const addedProduct = (titleadded) => {
	showAddedProduct.innerHTML = `<p>Se agregó <strong> mouse pad ${titleadded}</strong> al carrito</p>`;
	showAddedProduct.classList.add("visible");
	setTimeout(() => {
		showAddedProduct.style.opacity = "0";
	}, 500);

	setTimeout(() => {
		showAddedProduct.classList.remove("visible");
		showAddedProduct.innerHTML = "";
		showAddedProduct.style.opacity = "1";
	}, 700);
};

const saveLocalStorage = () => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

showProducts();

const categorias = document.getElementById("categorias");
const gamer = document.getElementById("gamer");
const dropGamerSubMenu = document.querySelector(".dropdown-gamer-submenu");
const navBar = document.getElementById("navbar");
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

const dota = document.getElementById("dota");

if (anchoVentana < responsive) {
	categorias.addEventListener("click", () => {
		dropDownContent.style.display === "block"
			? (dropDownContent.style.display = "none")
			: (dropDownContent.style.display = "block");
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

	dota.addEventListener("click", () => {
		/* for each a productos dota */
		navBar.style.display = "none";
		menuIconsAnimate();
	});
}
