function showRegistrationForm() {
    const form = document.getElementById('registration-form');
    form.classList.toggle('hidden');
    document.getElementById('login-form').classList.add('hidden'); // Hide login form
}

function showLoginForm() {
    const form = document.getElementById('login-form');
    form.classList.toggle('hidden');
    document.getElementById('registration-form').classList.add('hidden'); // Hide registration form
}

function registerStudent() {
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const password = document.getElementById('studentPassword').value;

    fetch('/api/students/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful!');
        document.getElementById('registration-form').classList.add('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function loginUser () {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        alert('Login successful!');
        // Store the token in local storage or session storage
        localStorage.setItem('token', data.token);
        // Optionally redirect to another page or update the UI
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed. Please check your credentials.');
    });
}

function fetchNotifications() {
    fetch('/api/notifications/')
    .then(response => response.json())
    .then(data => {
        const notificationList = document.getElementById('notification-list');
        notificationList.innerHTML = '';
        data.forEach(notification => {
            const li = document.createElement('li');
            li.textContent = notification.message;
            notificationList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error fetching notifications:', error);
    });
}

// Call fetchNotifications on page load
window.onload = fetchNotifications;