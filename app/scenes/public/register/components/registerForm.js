import { navigateTo } from "../../../../Router";
import { formValidator } from "../../../../helpers";
import style from "./registerForm.css";

export async function RegisterFormComponent() {
  const d = document;
  const root = d.getElementById("root");
  root.innerHTML = `
  <body>
  <div class="${style.container1}">
          <h1>create account</h1>
          <div class="${style.buttonsContainer}">
              <button id="registerPatient" class="${style.button}" type="button">Patient</button>
              <button id="registerPhysician" class="${style.button}" type="button">Doctor</button>
          </div>
          <div class="${style.socialNetworks}">
          <div class="${style.buttonSocial}">
            <box-icon type='logo' name='facebook'></box-icon>
            <a href="#" class="${style.facebookButton}">Facebook</a>
          </div>
          <div class="${style.buttonSocial}">
          <box-icon type='logo' name='instagram'></box-icon>
            <a href="#" class="${style.facebookButton}">Instagram</a>
          </div>
          <div class="${style.buttonSocial}">
            <box-icon type='logo' name='twitter'></box-icon>
            <a href="#" class="${style.facebookButton}">Twitter</a>
          </div>
          
          
    
  </div>

  <dialog id="patientInfo" class="${style.dialogContainer}">
      <form id="patientForm" class="${style.form}">
          <section class="${style.formSection}">
              <input type="text" id="patientName" placeholder="Name" class="${style.input}">
              <input type="email" id="patientEmail" placeholder="Email" class="${style.input}">
              <input type="password" id="patientPassword" placeholder="Password" class="${style.input}">
              <input type="number" id="patientRoleId" placeholder="Role ID" class="${style.input}" value="1" readonly>
          </section>
          <section class="${style.buttonSection}">
              <button type="submit" class="${style.button}">Register</button>
              <button type="button" id="closePatientInfo" class="${style.button}">Close</button>
              <a href="#" class="${style.googleButton}">Register with Google</a>
          </section>
      </form>
  </dialog>

  <dialog id="physicianInfo" class="${style.dialogContainer}">
      <form id="physicianForm" class="${style.form}">
          <section class="${style.formSection}">
              <input type="text" id="physicianName" placeholder="Name" class="${style.input}">
              <input type="email" id="physicianEmail" placeholder="Email" class="${style.input}">
              <input type="password" id="physicianPassword" placeholder="Password" class="${style.input}">
              <input type="number" id="physicianRoleId" placeholder="Role ID" class="${style.input}" value="2" readonly>
          </section>
          <section class="${style.buttonSection}">
              <button type="submit" class="${style.button}">Register</button>
              <button type="button" id="closePhysicianInfo" class="${style.button}">Close</button>
              <a href="#" class="${style.googleButton}">Register with Google</a>
          </section>
      </form>
  </dialog>
  `;

  const patientInfo = d.getElementById("patientInfo");
  const physicianInfo = d.getElementById("physicianInfo");

  function showDialog(dialog) {
    dialog.showModal();
  }

  function closeDialog(dialog) {
    dialog.close();
  }

  d.getElementById("registerPatient").addEventListener("click", () => showDialog(patientInfo));
  d.getElementById("registerPhysician").addEventListener("click", () => showDialog(physicianInfo));
  d.getElementById("closePatientInfo").addEventListener("click", () => closeDialog(patientInfo));
  d.getElementById("closePhysicianInfo").addEventListener("click", () => closeDialog(physicianInfo));

  async function handleRegister(form, type) {
    const name = form.querySelector(`#${type}Name`).value;
    const email = form.querySelector(`#${type}Email`).value;
    const password = form.querySelector(`#${type}Password`).value;

    if (!formValidator(name, email, password)) {
      alert("Please fill in all fields correctly");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role_id: type === "patient" ? 1 : 2 }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Response data:", data);

      if (data.exists) {
        alert("User already exists");
      } else if (data.success) {
        alert("Registration successful");
        closeDialog(d.getElementById(`${type}Info`));
      } else {
        alert("Register Success")
      }

    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  d.getElementById("patientForm").addEventListener("submit", (event) => {
    event.preventDefault();
    handleRegister(event.target, "patient");
    setTimeout(() => {
      navigateTo("/login")
    }, 2000);

  });

  d.getElementById("physicianForm").addEventListener("submit", (event) => {
    event.preventDefault();
    handleRegister(event.target, "physician");
    setTimeout(() => {
      navigateTo("/login")
    }, 2000);

  });
}
