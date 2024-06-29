let slideIndex = 0;
showSlides(slideIndex);
autoSlide();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function autoSlide() {
  plusSlides(1);
  setTimeout(autoSlide, 3000);
}
