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