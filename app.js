document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail(to_email = document.getElementById('email').value) {
    var message = document.getElementById('message').value;
    var templateParams = {
        to_email: to_email,
        message: message
    };

    emailjs.send('GOCSPX-A0qzd236hsumfQx6J', 'template_tfr0ggt', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Correo enviado correctamente!');
            document.getElementById('email').value = '';  // Limpia el campo de email
            document.getElementById('message').value = '';  // Limpia el campo de mensaje
        }, function(error) {
            console.log('FAILED...', error);
            alert('Error al enviar el correo: ' + error.text);
        });
}

function sendToGroup(group) {
    var emails = {
        'group1': ['email1@example.com', 'email2@example.com'],
        'group2': ['email3@example.com', 'email4@example.com'],
        'group3': ['email5@example.com', 'email6@example.com']
    };
    emails[group].forEach(email => {
        sendEmail(email);
    });
}
