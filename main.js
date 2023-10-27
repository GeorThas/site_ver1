const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prevButton');
const nextbutton = document.querySelector('.nextButton');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPrevSlide);
nextbutton.addEventListener('click', showNextSlide);

function showPrevSlide() {
   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
   updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
 }

 function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } 
        else {
            slide.style.display = 'none';
        }
    });
 }

 updateSlider();