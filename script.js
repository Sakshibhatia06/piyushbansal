 const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const visibleSlides = 3;
        let currentIndex = 0;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
        }

        function showNextSlide() {
            if (currentIndex < slides.length - visibleSlides) {
                currentIndex++;
                updateSlider();
            }
        }

        function showPrevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        }

        next.addEventListener('click', showNextSlide);
        prev.addEventListener('click', showPrevSlide);

        // Auto-slide every 5 seconds
        setInterval(() => {
            if (currentIndex < slides.length - visibleSlides) {
                showNextSlide();
            } else {
                currentIndex = 0;
                updateSlider();
            }
        }, 8000);

        function stopVideo() {
            const iframe = document.getElementById('youtubeVideo');
            iframe.src = iframe.src; // Reset the iframe src
        }