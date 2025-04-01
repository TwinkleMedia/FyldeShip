AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('py-2');
        navbar.classList.remove('py-3');
    } else {
        navbar.classList.add('py-3');
        navbar.classList.remove('py-2');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form submission handler with validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const formElements = this.elements;
        let isValid = true;
        
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute('required') && !formElements[i].value.trim()) {
                formElements[i].classList.add('is-invalid');
                isValid = false;
            } else {
                formElements[i].classList.remove('is-invalid');
            }
        }
        
        if (isValid) {
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        }
    });
}

// Animation on scroll
const fadeElements = document.querySelectorAll('.fade-up');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('appear');
        }
    });
}

// Check on load
window.addEventListener('load', checkFade);

// Check on scroll
window.addEventListener('scroll', checkFade);

























// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Varuni Marine Website Loaded");
// });


//          // Toggle the menu when the hamburger is clicked
// const menuToggle = document.getElementById("menu-toggle");
// const navLinks = document.getElementById("nav-links");

// // Toggle menu visibility
// menuToggle.addEventListener("click", (event) => {
//     navLinks.classList.toggle("active");

//     // Animate hamburger to X
//     const bars = document.querySelectorAll(".bar");
//     bars.forEach((bar) => bar.classList.toggle("active"));

//     // Prevent click from closing immediately
//     event.stopPropagation();
// });

// // Close menu when clicking outside
// document.addEventListener("click", (event) => {
//     if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
//         navLinks.classList.remove("active");
//         document.querySelectorAll(".bar").forEach((bar) => bar.classList.remove("active"));
//     }
// });

//         //  function toggleReadMore() {
//         //     let moreText = document.getElementById("more-text");
//         //     let btn = document.getElementById("read-more-btn");
        
//         //     if (moreText.classList.contains("hidden")) {
//         //         moreText.classList.remove("hidden");
//         //         btn.textContent = "Read Less";
//         //     } else {
//         //         moreText.classList.add("hidden");
//         //         btn.textContent = "Read More";
//         //     }
//         // }
        

// document.querySelectorAll(".custom-service-btn").forEach(button => {
//     button.addEventListener("click", function() {
//         alert("More details coming soon!");
//     });
// });



// document.getElementById("contact-form-unique").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById("name-unique").value.trim();
//     const email = document.getElementById("email-unique").value.trim();
//     const message = document.getElementById("message-unique").value.trim();
//     const formMessage = document.getElementById("form-message-unique");

//     if (name === "" || email === "" || message === "") {
//         formMessage.textContent = "Please fill in all fields.";
//         formMessage.style.color = "red";
//     } else {
//         formMessage.textContent = "Thank you! Your message has been sent.";
//         formMessage.style.color = "green";
//         document.getElementById("contact-form-unique").reset();
//     }
// });




//  // Optional interactive boat animation
//  const boat = document.querySelector('.boat');
        
//  boat.addEventListener('mouseenter', () => {
//      boat.style.transform = 'translateX(-50%) rotate(-10deg)';
//  });

//  boat.addEventListener('mouseleave', () => {
//      boat.style.transform = 'translateX(-50%) rotate(0deg)';
//  });




// //  about us

// document.addEventListener('DOMContentLoaded', () => {
//     const teamTitle = document.querySelector('.fylde-team-title');
//     const teamMembers = document.querySelectorAll('.fylde-team-member');

//     // Animate title
//     setTimeout(() => {
//         teamTitle.classList.add('animate');
//     }, 300);

//     // Animate team members with staggered effect
//     teamMembers.forEach((member, index) => {
//         setTimeout(() => {
//             member.classList.add('animate');
//         }, 600 + (index * 300));
//     });

//     // Interactive hover effects
//     teamMembers.forEach(member => {
//         const image = member.querySelector('.fylde-member-image');
//         const description = member.querySelector('.fylde-member-description');

//         member.addEventListener('mouseenter', () => {
//             image.style.transform = 'scale(1.05) rotate(3deg)';
//             description.style.opacity = '1';
//         });

//         member.addEventListener('mouseleave', () => {
//             image.style.transform = 'scale(1) rotate(0deg)';
//             description.style.opacity = '0';
//         });
//     });
// });