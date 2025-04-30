document.addEventListener('DOMContentLoaded', function() {
    // Close announcement bar
    const closeBtn = document.querySelector('.close-btn');
    const announcementBar = document.querySelector('.announcement-bar');
    
    if (closeBtn && announcementBar) {
        closeBtn.addEventListener('click', function() {
            announcementBar.style.display = 'none';
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Testimonial slider
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (prevBtn && nextBtn && testimonialSlider) {
        nextBtn.addEventListener('click', function() {
            testimonialSlider.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
        
        prevBtn.addEventListener('click', function() {
            testimonialSlider.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
    }
});