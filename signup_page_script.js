document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Gather form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validate form fields
        if (validateForm()) {
            // Simulate storing data locally
            localStorage.setItem('userData', JSON.stringify(data));

            // Feedback message
            alert('Registration successful!');

            // Optionally, clear the form
            form.reset();
        }
    });

    function validateForm() {
        let valid = true;

        // Get input values
        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const confirmPassword = document.querySelector('input[name="confirm-password"]').value;

        // Basic validation checks
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            valid = false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            valid = false;
        }

        return valid;
    }
});
