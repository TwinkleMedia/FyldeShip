document.addEventListener("DOMContentLoaded", () => {
    console.log("Varuni Marine Website Loaded");
});


         // Toggle the menu when the hamburger is clicked
         const menuToggle = document.getElementById("menu-toggle");
         const navLinks = document.getElementById("nav-links");
         
         menuToggle.addEventListener("click", () => {
             navLinks.classList.toggle("active");
             // Animate hamburger to X
             const bars = document.querySelectorAll('.bar');
             bars.forEach(bar => bar.classList.toggle('active'));
         });

        //  function toggleReadMore() {
        //     let moreText = document.getElementById("more-text");
        //     let btn = document.getElementById("read-more-btn");
        
        //     if (moreText.classList.contains("hidden")) {
        //         moreText.classList.remove("hidden");
        //         btn.textContent = "Read Less";
        //     } else {
        //         moreText.classList.add("hidden");
        //         btn.textContent = "Read More";
        //     }
        // }
        

document.querySelectorAll(".custom-service-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("More details coming soon!");
    });
});



document.getElementById("contact-form-unique").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name-unique").value.trim();
    const email = document.getElementById("email-unique").value.trim();
    const message = document.getElementById("message-unique").value.trim();
    const formMessage = document.getElementById("form-message-unique");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.color = "green";
        document.getElementById("contact-form-unique").reset();
    }
});