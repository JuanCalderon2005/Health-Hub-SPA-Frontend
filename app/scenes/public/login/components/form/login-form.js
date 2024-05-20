import { navigateTo } from '../../../../../Router.js';
import { formValidator } from '../../../../../helpers';
import 'boxicons';
import style from './login-form.css';

export async function LoginFormComponent() {
  const root = document.getElementById('root');

  console.log(style);
  root.innerHTML = `
  
  <div class="${style.body}">
    <div class="${style.container1}">
      <h1 class="tit1">HEALTH-HUB</h1>
      <h2 class="tit2">Empower your wellness journey</h2>
    </div>
    <div class="${style.container2}">
        <div class="${style.form1}">
            <form class="${style.form}" method="post" id="loginForm">
                <input class="${style.input}" type="email" name="email" placeholder="john@doe.com" id="email">
                <input class="${style.input}" type="password" name="password" placeholder="********" id="password">
                <input class="${style.buttonLogin}" type="submit" name="login" value="Login">
                <div class="${style.cont}">
                  <button id="login-with-google" class="${style.button}" type="button">Google</button>
                  <button id="/register" class="${style.button}" type="button">New Account</button>
                </div>
                <a href="#" class="${style.forpass}">Forgot password?</a>
            </form>
        </div>
    </div>
  </div>
`;

  const newRegister = document.getElementById('/register');
  newRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!formValidator(email, password)) {
      alert('Please fill in all fields');
      return;
    }
    const token = 'hola';
    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  });
}

async function login(email, password) {
  try {
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}
