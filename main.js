document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:monikamiskat8@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    // Open mailto link
    window.location.href = mailtoLink;
});
