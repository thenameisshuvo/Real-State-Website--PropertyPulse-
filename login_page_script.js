document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Fetch data from localStorage
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];

        // Check if user exists
        const user = storedData.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
            // Redirect to dashboard or home page
            window.location.href = 'index.html';
        } else {
            alert('Incorrect email or password.');
        }
    });
});
