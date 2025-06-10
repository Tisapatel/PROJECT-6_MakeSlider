 
        let carouselInner = document.getElementById('carousel-inner');
        let slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        let body = document.getElementById('body');

        function setBg(index) {
            let color = slides[index].getAttribute('data-bg');
            body.style.background = color;
        }

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
            setBg(index);
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) currentSlide = 0;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            showSlide(currentSlide);
        }

        // Init
        showSlide(currentSlide);
    