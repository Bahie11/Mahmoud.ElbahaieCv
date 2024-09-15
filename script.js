document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted! Thank you for reaching out.");
});

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
