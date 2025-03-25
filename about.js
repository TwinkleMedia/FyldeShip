document.addEventListener('DOMContentLoaded', () => {
    const teamContainer = document.querySelector('.fylde-team-container');
    const teamTitle = document.querySelector('.fylde-team-title');
    const teamMembers = document.querySelectorAll('.fylde-team-member');
    let hasAnimated = false;

    // Function to animate team section
    function animateTeamSection() {
        // Reset animation state
        teamTitle.classList.remove('animate');
        teamMembers.forEach(member => {
            member.classList.remove('animate');
        });

        // Animate title
        setTimeout(() => {
            teamTitle.classList.add('animate');
        }, 300);

        // Animate team members with staggered effect
        teamMembers.forEach((member, index) => {
            setTimeout(() => {
                member.classList.add('animate');
            }, 600 + (index * 300));
        });

        hasAnimated = true;
    }

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Only animate if not already animated
                if (!hasAnimated) {
                    animateTeamSection();
                }
            } else {
                // Reset animation state when scrolled out of view
                hasAnimated = false;
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is visible
    });

    // Start observing the team container
    observer.observe(teamContainer);

    // Interactive hover effects
    teamMembers.forEach(member => {
        const image = member.querySelector('.fylde-member-image');
        const description = member.querySelector('.fylde-member-description');

        member.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.05) rotate(3deg)';
            description.style.opacity = '1';
        });

        member.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1) rotate(0deg)';
            description.style.opacity = '0';
        });
    });
});

//contact 


document.addEventListener('DOMContentLoaded', () => {
    const contactContainer = document.querySelector('.fylde-contact-container');
    const formInputs = document.querySelectorAll('.fylde-input-field');
    const form = document.getElementById('fyldeContactForm');

    // Page load animation
    setTimeout(() => {
        contactContainer.style.opacity = '1';
        contactContainer.style.transform = 'scale(1)';
    }, 300);

    // Input field animations
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
            input.style.boxShadow = '0 0 10px rgba(255, 102, 0, 0.2)';
        });

        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
    });

    // Form submission animation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.fylde-submit-btn');
        
        submitBtn.textContent = 'Sending...';
        submitBtn.style.backgroundColor = '#888';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Sent!';
            submitBtn.style.backgroundColor = '#4CAF50';
        }, 1500);
    });
});