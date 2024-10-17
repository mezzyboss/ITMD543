/*document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('button');
    cartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function addToCart(event) {
    alert('Item added to cart!');
    // You can extend this to actually manage cart items
}*/


document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (response.status === 201) {
            alert('Registration successful');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            const errorData = await response.json();
            alert('Registration failed: ' + errorData.message);
        }
    } catch (error) {
        alert('Registration failed: ' + error.message);
    }
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Login successful');
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            const errorData = await response.json();
            alert('Login failed: ' + errorData.message);
        }
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});


//fetching order history
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (token) {
        const response = await fetch('/order-history', {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
            const orderHistory = await response.json();
            // Render order history
        } else {
            alert('Failed to fetch order history');
        }
    }
});

