// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of form submission with basic validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here you could add your form submission logic, e.g., AJAX request
    // For this example, we'll just log the form data to the console
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    alert('Thank you for your message!');

    // Reset form fields
    event.target.reset();
});





/// Smooth scrolling for navigation links
// Smooth scrolling for navigation links and section animation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Remove 'animate' class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('animate');
        });

        // Add 'animate' class to the target section
        targetSection.classList.add('animate');
    });
});



