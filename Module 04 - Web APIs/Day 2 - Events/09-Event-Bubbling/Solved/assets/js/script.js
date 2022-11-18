// TODO: Which element is the following line of code selecting?
// the div with the carouselbox class
let carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// the button with the next class
let next = carousel.querySelector(".next");
let prev = carousel.querySelector(".prev");
let index = 0;
let currentImage;

let images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style["background-image"] = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
};

// TODO: Describe the functionality of the following event listener.
// when the user clicks the carouselbox div element, select an image in the array
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// when the user clicks the next button element, go to the next image.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // to prevent event bubbling
  event.stopPropagation();
  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// when the user clicks the next button element, go to the next image.
prev.addEventListener("click", function(event) {
  // TODO: What would happen if we didn't add the following line of code?
  // the browser would load the image (as happens when you click on the image)
  event.stopPropagation();
  navigate(-1);
});

navigate(0);
