const showProductsContent = document.getElementById("show-products");
const showCart = document.getElementById("cart");
const modal = document.getElementById("modal-content");
const countProducts = document.getElementById("count-products");
const showAddedProduct = document.getElementById("showaddedproduct");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const showProducts = async () => {
	const URL_API = "./src/api/api.json";
	const response = await fetch(URL_API);
	const data = await response.json();
	data.forEach((product) => {
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
		addProduct.innerText = "Agregar al carrito";
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

const addedProduct = (titleadded) => {
	showAddedProduct.innerHTML = `<p>Se agregó <strong> mouse pad ${titleadded}</strong> al carrito</p>`;
	// showAddedProduct.style.display = "block";
	showAddedProduct.classList.add("visible");
	setTimeout(() => {
		// showAddedProduct.style.display = "none";
		showAddedProduct.style.opacity = "0";
	}, 500);

	setTimeout(() => {
		// showAddedProduct.style.display = "none";
		showAddedProduct.classList.remove("visible");
		showAddedProduct.innerHTML = "";
		showAddedProduct.style.opacity = "1";
	}, 700);
};

const saveLocalStorage = () => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

showProducts();
