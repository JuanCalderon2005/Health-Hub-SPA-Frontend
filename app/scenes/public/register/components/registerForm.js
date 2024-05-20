import { navigateTo } from "../../../../Router";
import style from './registerForm.css';

export async function RegisterFormComponent() {
    const root = document.getElementById('root');
    root.innerHTML = `
    <div class="${style.body}">
    <div class="${style.container1}">
        <div class="${style.container2}">
            <form id="registerForm" class="${style.form}">
            <h1 class="${style.title}">Register</h1>
            <input type="text" id="name" placeholder="Name" class="${style.input}">
            <input type="email" id="email" placeholder="Email" class="${style.input}">
            <input type="password" id="password" placeholder="Password" class="${style.input}">
            <input type="password" id="confirmPassword" placeholder="Confirm Password" class="${style.input}">
            <input type="submit" value="Register" class="${style.button}">
            </form>
            <a href="#" class="${style.google}">Register with Google</a>
        </div>
    </div>
    </div>
    `;

    window.addEventListener('load', () => {
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                if (!formValidator(name, email, password, confirmPassword)) {
                    alert('Please fill in all fields correctly');
                    return;
                }

                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }

                try {
                    const response = await fetch('https://your-api-url.com/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name, email, password })
                    });

                    const data = await response.json();

                    if (data.exists) {
                        alert('User already exists');
                    } else if (data.success) {
                        localStorage.setItem('token', data.token);
                        navigateTo('/dashboard');
                    } else {
                        alert('Registration failed');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again later.');
                }
            });
        } else {
            console.error('registerForm element not found in the DOM');
        }
    });
}
