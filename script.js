// Store all image filenames in a constant array
const images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'];

// Track current position in the carousel (starts at index 0)
let currentIndex = 0;

// Get references to DOM elements we'll need to manipulate
// Store under photoElement reference to <img> element
const photoElement = document.getElementById('photo');

// Store under counterElement reference to <div class=counter>
const counterElement = document.getElementById('counter');

/**
 * Advances to the next photo in the carousel
 * Uses modulo to cycle back to the beginning when reaching the end
 */
function nextPhoto() {
  // Increment index and wrap around using modulo operator
  // when reaching to 4 it zeros
  currentIndex = (currentIndex + 1) % images.length;
  
  // Update the image source to show the next photo
  photoElement.src = images[currentIndex];
  
  // Update the alt text to be more descriptive for accessibility
  photoElement.alt = `Photo ${currentIndex + 1}`;
  
  // Update the counter text to show current position
  counterElement.textContent = `${currentIndex + 1}/${images.length}`;
}