const Database = [
    { username: 'tej', password: 'tej123' },
    { username: 'Rupalee', password: 'rupalee123' },
    { username: 'Ayush', password: 'ayush123' },
    { username: 'Amit', password: 'amit123' },
    { username: 'Ansul', password: 'ansul123' },
    { username: 'Adhvik', password: 'adhvik123' },
    { username: 'Ayush', password: 'ayush123' },
    { username: 'Kajal', password: 'kajal123' },
    { username: 'Krunal', password: 'krunal123' },
    { username: 'risk', password: 'tej1234' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    const user = Database.find(user => user.username === username && user.password === password);
    
    if (user) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'https://tejchaudhari.github.io/portfolio/';
        // Redirect to another page or perform another action here
    } else {
        message.textContent = 'Invalid username or password!';
        message.style.color = 'red';
    }
});
script.js