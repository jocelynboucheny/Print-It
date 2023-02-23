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
];

const bulletpoint = document.getElementById("bullet_point");
let bannerImg = document.getElementById("banner-img");
let bannerP = document.getElementById("banner-p");
let ImgIndex = 0;
const right_arrow_element = document.getElementById("slide_right");
const left_arrow_element  = document.getElementById("slide_left");


function changeImgAndText() {
	 bannerImg.src = `./assets/images/slideshow/${slides[ImgIndex].image}`;
	 bannerP.innerHTML = slides[ImgIndex].tagLine;
}

for (let i = 0; i < slides.length; i++) {
	let dotElement = document.createElement("div");
	dotElement.className = "dot";
	bulletpoint.appendChild(dotElement);	
}

let dotElement = document.querySelectorAll(".dot");

function changeDotElement(){

	dotElement.forEach(element => {
		element.classList.remove("dot_selected");
	});
	dotElement[ImgIndex].classList.add("dot_selected");
}

left_arrow_element.addEventListener('click', function() {
		
       if (ImgIndex <= 0  ) {
		ImgIndex= slides.length - 1;
		changeImgAndText();
	    changeDotElement();
	    return;
	   }
       ImgIndex--;
	   changeImgAndText();
	   changeDotElement();

 });

 right_arrow_element.addEventListener('click', function() {
	if (ImgIndex  >= slides.length - 1 ) {
		ImgIndex= 0;
		changeImgAndText();
	    changeDotElement();
	    return;
	   }
       ImgIndex++;
	   changeImgAndText();
	   changeDotElement();

 });
