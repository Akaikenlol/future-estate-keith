const sr = ScrollReveal({
	opacity: 0,
	distance: "10px",
	duration: 500,
});

sr.reveal(`.blog`, {
	origin: "left",
	interval: 100,
	delay: 300,
	easing: "ease-out",
});
