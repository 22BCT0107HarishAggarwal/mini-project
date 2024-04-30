document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailOrPhoneInput = document.getElementById('Contact');
    const passwordInput = document.getElementById('Pass');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailOrPhoneRegex = /^\d{10}$|^([\w\.-]+)@([\w\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

        if (emailOrPhoneInput.value.trim() === '') {
            alert('Please enter your email or phone number.');
            return;
        }

        if (!emailOrPhoneRegex.test(emailOrPhoneInput.value.trim())) {
            alert('Please enter a valid email address or phone number.');
            return;
        }

        if (passwordInput.value.trim() === '') {
            alert('Please enter your password.');
            return;
        }

        // If all validations pass, submit the form
        form.submit();
    });
});
