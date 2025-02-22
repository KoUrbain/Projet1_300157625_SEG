// Check if user is already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = 'reservation.html'; // Redirect to reservation page if already logged in
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can replace this with a real authentication process
    if (username === 'admin' && password === 'password123') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'reservation.html'; // Redirect to reservation page after successful login
    } else {
        alert('Invalid username or password');
    }
});