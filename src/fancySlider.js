class fancySlider {
	constructor(selector, options){
		this.options = Object.assign({
			history: true,
			navigation: false,
			preloadImages: true,
			autoplayDelay: 5000
		}, options)
		if(typeof selector === 'string')
			selector = document.querySelectorAll(selector);
		if(typeof selector === 'object' && selector.length > 1){
			let instances = [];
			selector.forEach(element => {
				instances.push(new fancySlider(element))
			});
			return instances;
		}
		this.element = selector[0];
		this.currentSlide = null;

		// Preload images
		if(this.options.preloadImages){
			this.element.querySelectorAll("img").forEach((element) => {
				let img=new Image();
				img.src=element.src;
			});
			this.element.querySelectorAll("div").forEach((element) => {
				if(element.style['background-image']){
					let img=new Image();
					img.src=element.style['background-image'].match(/url\(["']?([^"']*)["']?\)/)[1];
				}
			});
		}

		// History (Prev / Next)
		if(this.options.history){
			let navlink;
			navlink = document.createElement("a");
			navlink.innerHTML = "&#10094;";
			navlink.addEventListener("click", (evt)=>{
				this.showSlide(this.currentSlide-1);
				if(this.options.autoplay){
					this.autoplay();
				}
			});
			navlink.classList.add("prev")
			this.element.appendChild(navlink);
			navlink = document.createElement("a");
			navlink.innerHTML = "&#10095;";
			navlink.addEventListener("click", (evt)=>{
				this.showSlide(this.currentSlide+1);
				if(this.options.autoplay){
					this.autoplay();
				}
			});
			navlink.classList.add("next")
			this.element.appendChild(navlink);


		}

		// Navigation
		if(this.options.navigation){
			let nav = document.createElement("nav")
			this.element.querySelectorAll(".slide").forEach((element,index) => {
				let navlink = document.createElement("a")
				navlink.addEventListener("click", (evt)=>{
					this.showSlide(index+1);
					if(this.options.autoplay){
						this.autoplay();
					}
				});
				nav.appendChild(navlink);
			});
			this.element.appendChild(nav);
		}

		if(this.options.autoplay){
			this.autoplay();
		}

		this.showSlide(1);
		return this;
	}
	showSlide(n){
		let slides = this.element.querySelectorAll(".slide");
		let direction = (n>this.currentSlide)?"Right":"Left";
		let revDirection = (direction=="Right")?"Left":"Right";
		// Hide previous slide
		if(this.currentSlide>=1){
			setTimeout((i)=>{
				slides[i-1].classList.remove("slide-slideInLeft");
				slides[i-1].classList.remove("slide-slideOutLeft");
				slides[i-1].classList.remove("slide-slideInRight");
				slides[i-1].classList.remove("slide-slideOutRight");
				slides[i-1].classList.add("slide-slideOut"+revDirection);
			},50,this.currentSlide)
		}

		this.currentSlide = (typeof n === 'undefined') ? this.currentSlide : n;
		this.currentSlide =
			(this.currentSlide > slides.length) ? 1 :
			(this.currentSlide < 1) ? slides.length :
			this.currentSlide;

		// Show new slide
		slides[this.currentSlide-1].style.display="none";
		setTimeout((i)=>{
			slides[i-1].style.display="block";
			slides[i-1].classList.remove("slide-slideInLeft");
			slides[i-1].classList.remove("slide-slideOutLeft");
			slides[i-1].classList.remove("slide-slideInRight");
			slides[i-1].classList.remove("slide-slideOutRight");
			slides[i-1].classList.add("slide-slideIn"+direction);
		},50,this.currentSlide)

		this.element.querySelectorAll("nav a").forEach((element,index) => {
			element.classList.remove("active");
			if(index === this.currentSlide-1){
				element.classList.add("active");
			}
		});
	}
	autoplay(){
		if(this.timer)
			clearInterval(this.timer);
		this.timer = setInterval(()=>{
			this.showSlide(this.currentSlide+1);
		}, this.options.autoplayDelay);

	}

/*		
		if(typeof selector === 'string') selector = document.querySelectorAll(selector);
		selector.forEach(element => {
			element.dataset['currentSlide'] = 1;
			alert(element.dataset.currentSlide);
			let links = element.querySelectorAll("a");
			links.forEach(element => {
//				alert(element.innerHTML);
			});
		});
*/
}

(()=>{

})();