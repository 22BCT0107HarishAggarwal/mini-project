document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('Name');
    const emailOrPhoneInput = document.getElementById('Contact');
    const passwordInput = document.getElementById('Pass');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        const phoneRegex = /^\d{10}$/;
        const passwordRegex = /^.{6,}$/;

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailOrPhoneInput.value.trim() === '') {
            alert('Please enter your email or phone number.');
            return;
        }

        if (!emailRegex.test(emailOrPhoneInput.value.trim())) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!phoneRegex.test(emailOrPhoneInput.value.trim())) {
            alert('Please enter a valid phone number.');
            return;
        }

        if (passwordInput.value.trim() === '') {
            alert('Please enter your password.');
            return;
        }

        if (!passwordRegex.test(passwordInput.value.trim())) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        form.submit();
    });
});
