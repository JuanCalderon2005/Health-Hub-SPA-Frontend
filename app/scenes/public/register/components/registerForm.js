import { navigateTo } from "../../../../Router";
import { formValidator } from "../../../../helpers";
import style from "./registerForm.css";

export async function RegisterFormComponent() {
  const d = document;
  const root = d.getElementById("root");
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


    <dialog id="patientInfo" class="${style.patientContainer}">
        <form id="patientForm" class="${style.form}">
            <section class="${style.patientInfo}">
                <input type="text" id="patientName" placeholder="Name" class="${style.input}">
                <input type="email" id="patientEmail" placeholder="Email" class="${style.input}">
                <input type="password" id="patientPassword" placeholder="Password" class="${style.input}">
                <input type="password" id="patientConfirmPassword" placeholder="Confirm Password" class="${style.input}">
            </section>
            <section class="${style.patientButtons}">
                <button type="button" id="registerPacient" class="${style.button}">Register</button>
                <button type="button" id="closePatientInfo" class="${style.button}">Close</button>
                <a href="#" class="${style.google}">Register with Google</a>
            </section>
        </form>
    </dialog>
    <!-- Physician's register form -->

    <dialog id="physicianInfo" class="${style.physicianContainer}">
        <form id="physicianForm" class="${style.form}">
            <section class="${style.physicianInfo}">
                <input type="text" id="physicianName" placeholder="Name" class="${style.input}">
                <input type="email" id="physicianEmail" placeholder="Email" class="${style.input}">
                <input type="password" id="physicianPassword" placeholder="Password" class="${style.input}">
                <input type="password" id="physicianConfirmPassword" placeholder="Confirm Password" class="${style.input}">
            </section>
            <section class="${style.physicianButtons}">
            <button type="button" id="registerDoctor" class="${style.button}">Register</button>
            <button type="button" id="closePhysicianInfo" class="${style.button}">Close</button>
                <a href="#" class="${style.google}">Register with Google</a>
            </section>
        </form>
    </dialog>
    `;

  const registerPatient = d.getElementById("registerPatient");
  const patientInfo = d.getElementById("patientInfo");
  const closePatientInfo = d.getElementById("closePatientInfo");
  const registerP = d.getElementById("registerPacient");
  const registerD = d.getElementById("registerDoctor");

  const registerPhysician = d.getElementById("registerPhysician");
  const physicianInfo = d.getElementById("physicianInfo");
  const closePhysicianInfo = d.getElementById("closePhysicianInfo");

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

  registerP.addEventListener("click", () => {
    navigateTo('/dashboard/home')
  })

  registerD.addEventListener("click", () => {
    navigateTo('/dashboard/home')
  })


  const patientForm = d.getElementById("patientForm");
  const physicianForm = d.getElementById("physicianForm");

  if (patientForm && physicianForm) {
    patientForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const patientName = d.getElementById("patientName").value;
      const patientEmail = d.getElementById("patientEmail").value;
      const patientPassword = d.getElementById("patientPassword").value;
      const patientConfirmPassword = d.getElementById("patientConfirmPassword").value;

      if (!formValidator(patientName, patientEmail, patientPassword, patientConfirmPassword)) {
        alert("Please fill in all fields correctly");
        return;
      }

      if (patientPassword !== patientConfirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await fetch("https://your-api-url.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: patientName, email: patientEmail, password: patientPassword }),
        });

        const data = await response.json();

        if (data.exists) {
          alert("User already exists");
        } else if (data.success) {
          localStorage.setItem("token", data.token);
          navigateTo("/dashboard");
        } else {
          alert("Registration failed");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    });

    physicianForm.addEventListener("submit", async (event) => {
      // Similar logic as above for physician registration form
    });
  } else {
    console.error("Form elements not found in the DOM");
  }
}
