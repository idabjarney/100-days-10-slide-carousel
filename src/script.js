import './styles/styles.scss';

const slider = document.querySelector('.slider');
const controlButtons = Array.from(document.querySelectorAll('.control-buttons button'));
const backBtn = document.querySelector('.back-button');
const forwardBtn = document.querySelector('.forward-button')

let currentSlide = 0;

// to increment and decrement and add if statement to for above 4 and below 0

forwardBtn.addEventListener('click', slideFoward);
backBtn.addEventListener('click', slideBack);

function slideFoward() {
  if (currentSlide === 4) {
  currentSlide = 0;
  } else {
    currentSlide++;
  }
  document.querySelector('.active').classList.remove('active');
  controlButtons[currentSlide].classList.add('active');
  moveSlider();
}

function slideBack() {
  if (currentSlide === 0) {
  currentSlide = 4;
  } else {
    currentSlide--;
  }
  document.querySelector('.active').classList.remove('active');
  controlButtons[currentSlide].classList.add('active');
  moveSlider();
}


controlButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    document.querySelector('.active').classList.remove('active');
    button.classList.add('active')
    moveSlider();
  })
});

function moveSlider() {
  slider.style.transform = `translateX(-${currentSlide * 20}%)`
}
