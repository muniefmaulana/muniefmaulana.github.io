document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var userName = document.getElementById('name').value;
        alert('Thank you, ' + userName + '! Your message has been sent.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
});
