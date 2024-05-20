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
const movies = document.getElementById("movies");
const dropMoviesSubMenu = document.querySelector(".dropdown-movies-submenu");
const sports = document.getElementById("sports");
const dropSportsSubMenu = document.querySelector(".dropdown-sports-submenu");
const series = document.getElementById("series");
const dropSeriesSubMenu = document.querySelector(".dropdown-series-submenu");

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
	movies.addEventListener("click", () => {
		dropMoviesSubMenu.style.display === "block"
			? (dropMoviesSubMenu.style.display = "none")
			: (dropMoviesSubMenu.style.display = "block");
	});
	sports.addEventListener("click", () => {
		dropSportsSubMenu.style.display === "block"
			? (dropSportsSubMenu.style.display = "none")
			: (dropSportsSubMenu.style.display = "block");
	});
	series.addEventListener("click", () => {
		dropSeriesSubMenu.style.display === "block"
			? (dropSeriesSubMenu.style.display = "none")
			: (dropSeriesSubMenu.style.display = "block");
	});

	/* CERRAR ENLACES GENERALES */
	home.addEventListener("click",()=>{
		closeNavbarResponsive();
	})
	const contact = document.querySelector(".contact");
	contact.addEventListener("click",()=>{
		closeNavbarResponsive();
	})

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