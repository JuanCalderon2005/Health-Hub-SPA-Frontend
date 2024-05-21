import styles from './forms.css';
export function createForms() {
    const pageContent = `
    <select class="${styles.indical}">
        <option class="${styles.options}" value="tip">Tips</option>
        <option class="${styles.options}" value="routine">Routines</option>
    </select> 
    <div id="content"></div>
    `;

    const logic = () => {
        const select = document.querySelector('select');
        const content = document.getElementById('content');
        select.addEventListener('change', (event) => {
            const value = event.target.value;
            if (value === 'tip') {
                content.innerHTML = `
                    <h1>Crear Tip</h1>
                    <form id="tip-form">
                        <label for="tip-type">Tipo de Tip:</label>
                        <input type="text" id="tip-type" name="tip-type" required><br><br>
                        <label for="tip-description">Descripción:</label>
                        <textarea id="tip-description" name="tip-description" required></textarea><br><br>
                        <button type="submit">Guardar Tip</button>
                    </form>
                `;
            } else {
                content.innerHTML = `
                    <h1>Crear Rutina</h1>
                    <form id="routine-form">
                        <label for="routine-type">Tipo de Rutina:</label>
                        <input type="text" id="routine-type" name="routine-type" required><br><br>
                        <label for="routine-duration">Duración (minutos):</label>
                        <input type="number" id="routine-duration" name="routine-duration" required><br><br>
                        <button type="submit">Guardar Rutina</button>
                    </form>
                `;
            }
            const tipForm = document.getElementById('tip-form');
            const routineForm = document.getElementById('routine-form');

            if (tipForm) {
                tipForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const tipType = document.getElementById('tip-type').value;
                    const tipDescription = document.getElementById('tip-description').value;
                    console.log(`Tip guardado: ${tipType}, Descripción: ${tipDescription}`);
                    alert(`Tip guardado: ${tipType}, Descripción: ${tipDescription}`);
                });
            }

            if (routineForm) {
                routineForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const routineType = document.getElementById('routine-type').value;
                    const routineDuration = document.getElementById('routine-duration').value;
                    console.log(`Rutina guardada: ${routineType}, Duración: ${routineDuration} minutos`);
                    alert(`Rutina guardada: ${routineType}, Duración: ${routineDuration} minutos`);
                });
            }
        });
    };

    return {
        pageContent,
        logic
    }
}