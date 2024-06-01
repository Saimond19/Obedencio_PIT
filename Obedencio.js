function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        document.getElementById('formResponse').innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResponse').innerHTML = '<p>Please fill out all fields.</p>';
    }
});
