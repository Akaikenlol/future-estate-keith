const template = document.createElement("template");
template.innerHTML = `
	<style>
	
	@import url("../../styles.css");
	</style>
    <div class="max-w-5xl mx-auto flex justify-between items-center p-5">
        <img src="../assets/images/future-estate.png" />
		<ul class="gap-10 hidden md:flex">
			<li><a href="/public/pages/Home/index.html" class="text-slate-600 text-md font-semibold hover:text-purple-500">Home</a></li>
			<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">About</a></li>
			<li>
				<div class="dropdown dropdown-hover">
					<label tabindex="0" class="text-slate-600 text-md font-semibold hover:text-purple-500">Service</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
						<li><a href="">Rent</a></li>
						<li><a href="">Sell</a></li>
					</ul>
				</div>
			</li>
			<li><a href="/public/pages/Blog/index.html" class="text-slate-600 text-md font-semibold hover:text-purple-500">Blog</a></li>
			<li><a href="/public/pages/Contact/index.html" class="text-slate-600 text-md font-semibold hover:text-purple-500">Contact</a></li>
		</ul>

			<ul id="animation" class="gap-10 flex fixed z-30 flex-col right-0 top-0 w-80 bg-white md:w-96 h-full p-5 ease-in-out duration-300 shadow-md translate-x-full ">
				<div id="sm-toggle" class="block">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
				</div>
				<li><a href="/public/pages/Home/index.html" class="text-slate-600 text-md font-semibold hover:text-purple-500">Home</a></li>
				<li><a href="" class="text-slate-600 text-md font-semibold hover:text-purple-500">About</a></li>
				<li>
					<div class="dropdown dropdown-hover">
						<label tabindex="0" class="text-slate-600 text-md font-semibold hover:text-purple-500">Service</label>
						<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
							<li><a href="">Rent</a></li>
							<li><a href="">Sell</a></li>
						</ul>
					</div>
				</li>
				<li><a href="/public/pages/Blog/index.html" class="text-slate-600 text-md font-semibold hover:text-purple-500">Blog</a></li>
				<li><a href="/public/pages/Contact/index.html" class="text-slate-600 text-md font-semibold hover:text-purple-500">Contact</a></li>
			</ul>

		
		<div class="flex gap-5 items-center relative">
			<a href="/public/pages/SignUp/index.html" class="py-2 px-5 flex justify-center items-center bg-purple-500 rounded-sm text-white active:text-gray-200 active:bg-purple-700">Sign Up</a>	
			<a href="/public/pages/Login/index.html" class="text-purple-500 md:block hidden">Login</a>
			<div id="toggle" class="md:hidden block" onclick="openNav()">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
			</div>
			
		</div>
		
		
    </div>
`;

class Header extends HTMLElement {
	constructor() {
		super();
		this.showInfo = false;
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	openNav = () => {
		this.shadowRoot.getElementById("animation").style.transform = "translateX(0)";
	};

	closeNav = () => {
		this.shadowRoot.getElementById("animation").style.transform =
			"translateX(100%)";
	};

	connectedCallback() {
		this.shadowRoot
			.querySelector("#toggle")
			.addEventListener("click", this.openNav);
		this.shadowRoot
			.querySelector("#sm-toggle")
			.addEventListener("click", this.closeNav);
	}
}
export default Header;
