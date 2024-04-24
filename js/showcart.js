const renderCart = (e) => {
	if (cart.length === 0) {
		emptyCart();
	} else {
		modal.style.width = "550px";
		modal.innerHTML = "";
		const modalHeader = document.createElement("div");
		modalHeader.className = "modal-header";
		modalHeader.innerHTML = `
			<p>Carrito</p>
		`;
		modal.append(modalHeader);

		const modalClose = document.createElement("button");
		modalClose.innerText = "x";
		modalClose.className = "btn-close-modal";
		modalClose.addEventListener("click", () => {
			modal.style.display = "none";
		});

		modalHeader.append(modalClose);

		cart.forEach((product) => {
			const modalProduct = document.createElement("div");
			modalProduct.className = "modal-product";
			modalProduct.innerHTML = `
				<img src="${product.img}" alt="${product.title}" >
				<p class="product-title">${product.title}</p>
				<p>$${product.price}</p>
				<span class="substract"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="#0F1729"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#0F1729"></path> </g></svg></span>
				<p>${product.quantity} Un.</p>
				<span class="add"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Circle"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></span>
				<p class="article__total">Total: $${product.quantity * product.price}</p>
				<span class="delete-product"><svg width="18px" height="18px" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
        	`;
			modal.append(modalProduct);
			// console.log(cart.length);

			let substract = modalProduct.querySelector(".substract");

			substract.addEventListener("click", () => {
				if (product.quantity !== 1) {
					product.quantity--;
					renderCart();
					saveLocalStorage();
				}
			});

			let add = modalProduct.querySelector(".add");
			add.addEventListener("click", () => {
				product.quantity++;
				renderCart();
				saveLocalStorage();
			});

			let deleteProduct = modalProduct.querySelector(".delete-product");
			deleteProduct.addEventListener("click", () => {
				deleteProductCart(product.id);
			});
		});

		const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
		const totalBuying = document.createElement("div");
		totalBuying.className = "total-content";
		totalBuying.innerHTML = `Total a pagar:<strong>$${total}</strong>`;
		modal.append(totalBuying);
		const modalButtonBuy = document.createElement("button");
		modalButtonBuy.innerText = "COMPRAR";
		modalButtonBuy.className = "modal-button-buy";
		modal.append(modalButtonBuy);
	}

	// Parametro para que detecte si el e.target es el boton de addproduct, si se le hace click que no abra el modal.
	if (e) {
		if (e.srcElement.className === "btn-add") {
		} else {
			modal.style.display = "block";
		}
	}

	// modal.style.display = "block";
};

showCart.addEventListener("click", renderCart);

const deleteProductCart = (id) => {
	const foundId = cart.find((element) => element.id === id);
	cart = cart.filter((cartId) => {
		return cartId !== foundId;
	});
	renderCart();
	cartCounter();
	saveLocalStorage();
};

const cartCounter = () => {
	countProducts.style.display = "inline-block";
	countProducts.innerText = cart.length;
	const cartLength = cart.length;
	localStorage.setItem("cartlength", JSON.stringify(cartLength));
	countProducts.innerText = JSON.parse(localStorage.getItem("cartlength"));
};

cartCounter();

const emptyCart = () => {
	modal.innerHTML = "";
	modal.style.display = "block";
	modal.style.width = "300px";
	const modalCartEmpty = document.createElement("div");
	modalCartEmpty.className = "modal-cart-empty";
	modalCartEmpty.innerHTML = `
		<p>El carrito está vacío</p>
		`;
	modal.append(modalCartEmpty);

	const modalClose = document.createElement("button");
	modalClose.innerText = "x";
	modalClose.className = "btn-close-modal-empty";
	modalClose.addEventListener("click", () => {
		modal.style.display = "none";
	});
	modalCartEmpty.append(modalClose);
	setTimeout(() => {
		modal.style.display = "none";
	}, 1000);
};
