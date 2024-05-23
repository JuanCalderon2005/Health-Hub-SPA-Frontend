import { navigateTo } from "../../../../Router";
import { formValidator } from "../../../../helpers";
import style from './registerForm.css';

export async function RegisterFormComponent() {
    const d = document;
    const root = d.getElementById('root');
    root.innerHTML = `
    <div class="${style.body}">
        <div class="${style.container1}">
            <div class="${style.container2}">
                <h1>Register</h1>
                <h2>You are a...</h2>
                <div class="${style.container3}">
                    <button id="registerPatient" class="${style.button}" type="button">Patient</button>
                    <button id="registerPhysician" class="${style.button}" type="button">Doctor</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Patient's register form -->

    <dialog id="patientInfo" class="${style.patientContainer}">
        <form method="dialog" class="${style.form}">
            <section class="${style.patientInfo}">
                <input type="text" id="patientName" placeholder="Name" class="${style.input}">
                <input type="email" id="patientEmail" placeholder="Email" class="${style.input}">
                <input type="password" id="patientPassword" placeholder="Password" class="${style.input}">
                <input type="password" id="patientConfirmPassword" placeholder="Confirm Password" class="${style.input}">
            </section>
            <section class="${style.physicianData}">
                <label for="weight">Enter your weight</label>
                <input type="number" id="weight" name="weight" required>
                <label for="height">Enter your height</label>
                <input type="number" id="height" name="height" required>
                <label for="age">Enter your age</label>
                <input type="number" id="age" name="age" required>
                <label><input type="radio" name="sex" value="male" required>Male</label>
                <label><input type="radio" name="sex" value="female" required>Female</label>
            </section>
            <section class="${style.physicianButtons}">
                <input type="hidden" id="patientId" name="patientId">
                <input type="submit" value="Register" class="${style.button}">
                <button type="button" id="closePatientInfo" class="${style.button}">Close</button>
                <a href="#" class="${style.google}">Register with Google</a>
            </section>
        </form>
    </dialog>
    <!-- Physician's register form -->

    <dialog id="physicianInfo" class="${style.physicianContainer}">
        <form method="dialog" class="${style.form}">
            <section class="${style.physicianInfo}">
                <input type="text" id="physicianName" placeholder="Name" class="${style.input}">
                <input type="email" id="physicianEmail" placeholder="Email" class="${style.input}">
                <input type="password" id="physicianPassword" placeholder="Password" class="${style.input}">
                <input type="password" id="physicianConfirmPassword" placeholder="Confirm Password" class="${style.input}">
            </section>
            <section class="${style.patientButtons}">
                <input type="hidden" id="physicianId" name="physicianId">
                <input type="submit" value="Register" class="${style.button}">
                <button type="button" id="closePhysicianInfo" class="${style.button}">Close</button>
                <a href="#" class="${style.google}">Register with Google</a>
            </section>
        </form>
    </dialog>
    `;

    // Const from the patient
    const registerPatient = d.getElementById(' ');
    const patientInfo = d.getElementById('patientInfo');
    const closePatientInfo = d.getElementById('closePatientInfo');

    // Const from the physician
    const registerPhysician = d.getElementById('registerPhysician');
    const physicianInfo = d.getElementById('physicianInfo');
    const closePhysicianInfo = d.getElementById('closePhysicianInfo');

    registerPatient.addEventListener("click", () => {
        patientInfo.showModal();
    });

    closePatientInfo.addEventListener("click", () => {
        patientInfo.close();
    });

    registerPhysician.addEventListener("click", () => {
        physicianInfo.showModal();
    });

    closePhysicianInfo.addEventListener("click", () => {
        physicianInfo.close();
    });

    const registerForm = d.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = d.getElementById('name').value;
            const email = d.getElementById('email').value;
            const password = d.getElementById('password').value;
            const confirmPassword = d.getElementById('confirmPassword').value;

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
}
