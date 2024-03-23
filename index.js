let slideI = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(i) {
	if (i < 0) {
		slideI = totalSlides - 1;
	} else if (i >= totalSlides) {
		slideI = 0;
	}

	const offset = -slideI * 100;
	document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
	slideI--;
	showSlide(slideI);
}

function nextSlide() {
	slideI++;
	showSlide(slideI);
}

setInterval(nextSlide, 5000); 