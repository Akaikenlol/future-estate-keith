const scrollR = ScrollReveal({
	opacity: 0,
	distance: "20px",
	duration: 1000,
});

scrollR.reveal(`.popular-card, .blog-card`, {
	origin: "left",
	interval: 300,
	delay: 300,
	reset: true,
	easing: "ease-out",
});

scrollR.reveal(`.service-img`, {
	origin: "left",
	distance: "100px",
	duration: 700,
	reset: true,
	easing: "ease-in-out",
});

scrollR.reveal(`.service-content`, {
	origin: "right",
	distance: "100px",
	duration: 700,
	reset: true,
	easing: "ease-in-out",
});
