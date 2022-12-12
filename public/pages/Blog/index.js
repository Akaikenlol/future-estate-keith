const scrollR = ScrollReveal({
	opacity: 0,
	distance: "10px",
	duration: 500,
});

scrollR.reveal(`.blog`, {
	origin: "left",
	interval: 100,
	delay: 300,
	easing: "ease-out",
});
