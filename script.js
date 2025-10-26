let slideIndex = 0;
// These selectors automatically find all 5 slides and 5 dots.
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    // Hide all slides and remove active class from dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Calculate the new index, ensuring it wraps around (0-4)
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Show the current slide and activate the corresponding dot
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Function to advance the slide (for auto-play)
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Auto-play interval (e.g., change every 5 seconds)
let slideInterval = setInterval(nextSlide, 5000);

// Add click listeners to the dots
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        // Clear the auto-play interval on manual interaction
        clearInterval(slideInterval);
        
        const index = parseInt(this.getAttribute('data-slide-index'));
        showSlide(index);

        // Optional: Restart the interval after a delay
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Initial display of the first slide
showSlide(slideIndex);