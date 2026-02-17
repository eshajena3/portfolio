// ===== Hero Text Fade-In =====
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-content h1, .hero-content h3, .hero-content .social-icons');

    heroElements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 300); // stagger each element
    });
});

// ===== Hero Images Floating =====
const heroImages = document.querySelectorAll('.hero-images img');

heroImages.forEach(img => {
    let direction = 1;
    let position = 0;
    const speed = 0.2; // smaller = slower float

    function floatImage() {
        position += direction * speed;
        if (position > 15 || position < -15) direction *= -1;
        img.style.transform = `translateY(${position}px)`; // floating effect
        requestAnimationFrame(floatImage);
    }

    floatImage();
});
