//Tableau des images du slider et de leurs descriptions
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Javascript flèche suivant
const next = document.querySelector(".arrow_right");

next.addEventListener("click", () => {
	counter++;
	if(counter === SlideImg){
		Dots[SlideImg-1].classList.remove("dot_selected");
		counter = 0;
	}

	img.src = "./assets/images/slideshow/" + slides[counter].image;
	texte.innerHTML = slides[counter].tagLine;

	if(counter != 0 ){
		Dots[counter-1].classList.remove("dot_selected");
	}
	Dots[counter].classList.add("dot_selected");	
});

//Javascript flèche précédent
const back = document.querySelector(".arrow_left");

back.addEventListener("click", () => {
	counter--;
	if(counter < 0){ 
		Dots[counter+1].classList.remove("dot_selected");
		counter = SlideImg - 1;
	}
	
	img.src = "./assets/images/slideshow/" + slides[counter].image;
	texte.innerHTML = slides[counter].tagLine;

	if(counter != SlideImg - 1){
		Dots[counter+1].classList.remove("dot_selected");	
	}
	Dots[counter].classList.add("dot_selected");
});