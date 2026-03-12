let currentIndex = 0;
let blocks = document.getElementById('blocks');
const totalSlides = blocks.children.length; 

let screenWidth = window.innerWidth; 
let screenHeight = window.innerHeight; 
let slides = document.querySelectorAll('.slide'); 

slides.forEach((singleSlide) => {
  singleSlide.style.width = `${screenWidth}px`;
});

slides.forEach((singleSlide) => {
  singleSlide.style.height = `${screenHeight-1}px`;
});

document.addEventListener('keydown', (event) => { 
  if(event.key == 'ArrowRight'){
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
  }  
  if(event.key == 'ArrowLeft'){
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
  } 
});

function updateSlider() {
  const offset = currentIndex * -screenWidth;
  blocks.style.transform = `translateX(${offset}px)`;
}