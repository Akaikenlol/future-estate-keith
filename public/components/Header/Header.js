const template = document.createElement("template");
template.innerHTML = `
	<style>
	
	@import url("../../styles.css");
	</style>
    <div class="max-w-5xl mx-auto flex justify-between items-center p-5">
        <img src="../assets/images/future-estate.png" />
		<ul class="gap-10 hidden md:flex">
			<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">Home</a></li>
			<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">About</a></li>
			<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">Service</a></li>
			<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">Blog</a></li>
			<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">Contact</a></li>
		</ul>
		<button class="py-2 px-5 bg-purple-500 rounded-md text-white active:text-gray-200 active:bg-purple-700">Sign Up</button>
		
    </div>
`;

class Header extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
export default Header;
