document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!event.target.closest('#mobile-menu') && !event.target.closest('#menu-toggle')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
    
    // Scroll to top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.className = 'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300 z-50';
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopButton);
    
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.opacity = '0';
        }
    });
    
    // Enhanced team member interactions (continued)
   if (image && bio) {
    member.addEventListener('mouseenter', function() {
        bio.style.opacity = '1';
        bio.style.transform = 'translateY(0)';
        image.style.transform = 'scale(1.05)';
    });
    
    member.addEventListener('mouseleave', function() {
        bio.style.opacity = '0';
        bio.style.transform = 'translateY(10px)';
        image.style.transform = 'scale(1)';
    });
}
});

// Form validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;
    
    // Reset previous error states
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    
    if (!nameInput.value.trim()) {
        addErrorMessage(nameInput, 'Please enter your name');
        isValid = false;
    }
    
    if (!emailInput.value.trim()) {
        addErrorMessage(emailInput, 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        addErrorMessage(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!messageInput.value.trim()) {
        addErrorMessage(messageInput, 'Please enter your message');
        isValid = false;
    }
    
    if (isValid) {
        // If form is valid, you could submit it via AJAX here
        const formData = new FormData(contactForm);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    }
});

function addErrorMessage(inputElement, message) {
    inputElement.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    inputElement.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
}

// Initialize lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
} else {
// Fallback for browsers without IntersectionObserver support
lazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
});
}



//Team Slider JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('teamSlider');
    const slides = slider.querySelectorAll('.team-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.slider-dot');
    
    let currentIndex = 0;
    let slidesToShow = 3; // Default for desktop
    
    // Responsive slides calculation
    function updateSlidesToShow() {
        if (window.innerWidth >= 1024) {
            slidesToShow = 3;
        } else if (window.innerWidth >= 768) {
            slidesToShow = 2;
        } else {
            slidesToShow = 1;
        }
    }
    
    // Update slider position
    function updateSlider() {
        const slideWidth = 100 / slidesToShow;
        const translateX = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('bg-yellow-500', index === currentIndex);
            dot.classList.toggle('opacity-100', index === currentIndex);
            dot.classList.toggle('bg-gray-300', index !== currentIndex);
            dot.classList.toggle('opacity-50', index !== currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        const maxIndex = slides.length - slidesToShow;
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        const maxIndex = slides.length - slidesToShow;
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
    
    // Auto-play slider
    let autoPlay = setInterval(nextSlide, 5000);
    
    // Pause auto-play on hover
    const sliderContainer = document.querySelector('.team-slider-wrapper');
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlay));
    sliderContainer.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextSlide, 5000);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateSlidesToShow();
        updateSlider();
    });
    
    // Initialize
    updateSlidesToShow();
    updateSlider();
});




