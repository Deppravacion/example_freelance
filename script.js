const body = document.body;
const etsy = document.getElementById('etsyCTA');
const bookUs = document.getElementById('book-usCTA');
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
let lastScroll = 0;
 
window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll <= 600) {
		etsy.classList.remove("etsyCTA-active");
		bookUs.classList.remove("book-usCTA-active");
		
	} else {
		etsy.classList.add("etsyCTA-active");
		bookUs.classList.add("book-usCTA-active");
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

toggleButton.addEventListener('click', ()=> {
  navbarLinks.classList.toggle('active');
})

navbarLinks.addEventListener('click', ()=> {
  navbarLinks.classList.toggle('active');
})