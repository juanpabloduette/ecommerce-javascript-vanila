let totalBuy = 0;

const renderCart = (e) => {
	if (cart.length === 0) {
		emptyCart();
	} else {
		modal.style.width = "480px";
		modal.innerHTML = "";
		const modalHeader = document.createElement("div");
		modalHeader.className = "modal-header";
		modalHeader.innerHTML = `
			<p>Carrito</p>
		`;
		modal.append(modalHeader);

		const modalClose = document.createElement("button");
		modalClose.innerHTML = `<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c0c0c0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z" fill="#c0c0c0" stroke-width="0.5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#c0c0c0" stroke-width="0.5"></path> </g></svg>`;
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
				<div class="product-units">
					<span class="substract"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="#0F1729"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#0F1729"></path> </g></svg></span>
					<p><strong>${product.quantity}</strong> Un.</p>
					<span class="add"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Circle"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></span>
				</div>
				<p class="article__total">Total: $${product.quantity * product.price}</p>
				<span class="delete-product"><svg width="18px" height="18px" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
				`;
			modal.append(modalProduct);

			let substract = modalProduct.querySelector(".substract");

			substract.addEventListener("click", () => {
				if (product.quantity !== 1 && product.quantity <= product.stock) {
					product.quantity--;
					renderCart();
					saveLocalStorage();
				}
			});

			let add = modalProduct.querySelector(".add");
			add.addEventListener("click", () => {
				if(product.quantity < product.stock){
					product.quantity++;
					renderCart();
					saveLocalStorage();
				}else{
					// alert('No hay más stock')
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
			
			});

			let deleteProduct = modalProduct.querySelector(".delete-product");
			deleteProduct.addEventListener("click", () => {
				deleteProductCart(product.id);
			});
		});

		totalBuy = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
		const totalBuying = document.createElement("div");
		totalBuying.className = "total-content";
		totalBuying.innerHTML = `Total a pagar:<strong>$${totalBuy}</strong>`;
		modal.append(totalBuying);
		const modalButtonBuy = document.createElement("button");
		modalButtonBuy.innerText = "COMPRAR";
		modalButtonBuy.className = "modal-button-buy";
		modalButtonBuy.setAttribute("onclick", "btnBuy()");
		modal.append(modalButtonBuy);
	}

	// Parametro para que detecte si el e.target es el boton de addproduct, si se le hace click que no abra el modal.
	if (e) {
		if (e.srcElement.className === "btn-add") {
		} else {
			modal.style.display = "block";
		}
	}
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

function btnBuy(){
	console.log("se enviaria la info al backend para validar si los precios son correctos y se debe restar las unidades compradas del stock" + " se envía al backend el total a pagar de:"+ totalBuy)
	console.log(cart)
}
