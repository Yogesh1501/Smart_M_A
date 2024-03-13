  // Function to toggle the visibility of the collapsed menu
  function toggleMenu() {
    var menu = document.getElementById("collapsed-menu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

  // Variables to keep track of current slide index
        let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.slider-image').length;

        // Function to show the current slide
        function showSlide(n) {
            const slides = document.querySelectorAll('.slider-image');
            if (n >= totalSlides) { currentSlide = 0; }
            if (n < 0) { currentSlide = totalSlides - 1; }
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlide].classList.add('active');
        }

        // Automatically change slide every 2 seconds
        setInterval(() => {
            currentSlide++;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }, 2000);
