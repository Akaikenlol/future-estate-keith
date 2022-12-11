const template = document.createElement("template");
template.innerHTML = `
	<style>
	
	@import url("../../styles.css");
	</style>
	<div class="max-w-5xl px-2 mx-auto mt-20">
		<div class="h-px bg-gray-500 divider"></div>
	</div>

	<div class="w-full py-10">
		<div class="flex justify-between max-w-5xl px-2 mx-auto">
			<div>Future Residency Limited</div>
			<div class="flex gap-5">
				<a href=""><img src="/public/assets/icons/Facebook.png" alt="" /></a>
				<a href=""><img src="/public/assets/icons/instagram.png" alt="" /></a>
				<a href=""><img src="/public/assets/icons/linkedin.png" alt="" /></a>
				<a href=""><img src="/public/assets/icons/twitter.png" alt="" /></a>
			</div>
		</div>
	</div>
`;

class Footer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
export default Footer;
