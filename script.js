// Script to animate project images with pop-in and pop-out effect

// Select all images inside the container-project
const container = document.querySelector('.container-project');

// Function to add pop-in animation class
function popIn(element) {
  element.classList.remove('opacity-0', 'scale-75');
  element.classList.add('opacity-100', 'scale-100', 'transition', 'duration-500', 'ease-out');
}

// Function to add pop-out animation class
function popOut(element) {
  element.classList.remove('opacity-100', 'scale-100');
  element.classList.add('opacity-0', 'scale-75', 'transition', 'duration-500', 'ease-in');
}

// Add portrait class to images with height > width
function addAspectRatioClasses(images) {
  images.forEach(img => {
    if (img.naturalHeight > img.naturalWidth) {
      img.classList.add('portrait');
      // Tailwind classes for portrait images
      img.classList.add('max-h-96', 'w-auto');
    } else {
      // Landscape images
      img.classList.add('max-w-full', 'h-auto');
    }
  });
}

// Animate images sequentially with pop in/out effect
function animateImages() {
  const images = container.querySelectorAll('img');
  addAspectRatioClasses(images);
  let currentIndex = 0;

  // Initialize all images to pop-out state
  images.forEach(img => {
    img.classList.add('opacity-0', 'scale-75');
  });

  function showNextImage() {
    // Pop out previous image
    if (currentIndex > 0) {
      popOut(images[(currentIndex - 1) % images.length]);
    } else {
      popOut(images[images.length - 1]);
    }

    // Pop in current image
    popIn(images[currentIndex]);

    currentIndex = (currentIndex + 1) % images.length;
  }

  // Show first image immediately
  popIn(images[0]);
  currentIndex = 1;

  // Change image every 3 seconds
  setInterval(showNextImage, 3000);
}

// Run animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  animateImages();
});
