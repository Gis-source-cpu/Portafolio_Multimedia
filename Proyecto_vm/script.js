document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".hero-prev");
    const nextBtn = document.querySelector(".hero-next");
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 5000; // 5 segundos
    let slideInterval;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetAutoSlide();
        });

        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    startAutoSlide();

    document.querySelectorAll(".carousel-section").forEach((section) => {
        const track = section.querySelector(".carousel-track");
        const prevProductBtn = section.querySelector(".products-prev");
        const nextProductBtn = section.querySelector(".products-next");

        if (track && prevProductBtn && nextProductBtn) {
            nextProductBtn.addEventListener("click", () => {
                track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
            });

            prevProductBtn.addEventListener("click", () => {
                track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
            });
        }
    });
});