let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
	if (index < 0) {
		slideIndex = totalSlides - 1;
	} else if (index >= totalSlides) {
		slideIndex = 0;
	}

	const offset = -slideIndex * 100;
	document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}

setInterval(nextSlide, 5000); 
