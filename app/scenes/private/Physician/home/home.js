import styles from './home.css';
import 'boxicons';

export function HomeScene() {
  const pageContent = `
    <section class="${styles['grid-container']}">
      <div class="${styles['left-container']}">
        <div class="${styles.contBottom}">
          <button type="button" id="updateRoutine" class="${styles.newTip}">Agregar Rutina</button>
        </div>
        <div id="routineList" class="${styles['list-container']}"></div>
      </div>

      <div id="my-id"></div>

      <div class="${styles['other-container']}">
        <div class="${styles.contBottom}">
        <button type="button" id="updateTip" class="${styles.newTip}">Agregar Tip</button>
        </div>
        <div id="tipList" class="${styles['list-container']}"></div>
      </div>
      <div class=${styles['right-container']}>
      <div class=${styles['create-post-container']}>
        <div class=${styles['create-post-header']}>
          <p class=${styles['text']}>Create post</p>
        </div>
        <div class=${styles['create-post-body']}>
          <div class=${styles['input-container']}>
            <span class=${styles['input-icon']}>💬</span>
            <input class="${styles.texForo}" id="messageInput" type="text" placeholder="Write message" />
            <button class=${styles['boton-send']} onclick="displayMessage()">Send</button>
          </div>
          <div id="replyContainer" class="${styles['reply-container']}" style="display: none;">
            Respondiendo a: <span id="replyTo" class="${styles['reply-text']}"></span>
            <button class="${styles['cancel-reply']}" onclick="cancelReply()">X</button>
          </div>
          </div>
          <div class="${styles['messageArea']}" id="displayMessageArea">
          </div>
    </div>
    </section>

    <dialog id="routineDialog" class="${styles.routineDialogContainer}">
      <form method="dialog" class="${styles.foms}">
        <section class="${styles['dialog-content']}">
          <h1>Crear Rutina</h1>
          <label for="routineType">Tipo de Rutina:</label>
          <input type="text" id="routineType" name="routineType" required><br><br>
          <label for="routineDuration">Duración (minutos):</label>
          <input type="number" id="routineDuration" name="routineDuration" required>
        </section>
        <section class="${styles['dialog-buttons']}">
          <button type="button" id="cancelRoutine">Cancelar</button>
          <button type="submit" id="saveRoutine">Guardar</button>
        </section>
      </form>
    </dialog>

    <dialog id="tipDialog" class="${styles.tipDialogContainer}">
      <form method="dialog" class="${styles.foms}">
        <section class="${styles['dialog-content']}">
          <h1>Crear Tip</h1>
          <label for="tipType">Tipo de Tip:</label>
          <input type="text" id="tipType" name="tipType" required><br><br>
          <label for="tipDescription">Descripción:</label>
          <textarea id="tipDescription" name="tipDescription" required></textarea>
        </section>
        <section class="${styles['dialog-buttons']}">
          <button type="button" id="cancelTip">Cancelar</button>
          <button type="submit" id="saveTip">Guardar</button>
        </section>
      </form>
    </dialog>
  `;

  const logic = async () => {

    const $myContainer = document.getElementById('my-id');
    const response = await fetch('http://localhost:3000/user'); // Asegúrate de usar HTTP si no tienes SSL configurado
    const respJson = await response.json();
    console.log(respJson);
    // $myContainer.innerHTML = `
    //   ${respJson.map(todo => `<p>${todo.title}</p><p>${todo.userId}</p><p>${todo.completed}</p>`).join('')}
    // `

    const updateRoutineButton = document.getElementById("updateRoutine");
    const cancelRoutineButton = document.getElementById("cancelRoutine");
    const routineDialog = document.getElementById("routineDialog");
    const routineList = document.getElementById("routineList");

    const updateTipButton = document.getElementById("updateTip");
    const cancelTipButton = document.getElementById("cancelTip");
    const tipDialog = document.getElementById("tipDialog");
    const tipList = document.getElementById("tipList");

    window.displayMessage = function () {
      const message = document.getElementById('messageInput').value;
      const replyTo = document.getElementById('replyTo').innerText;

      if (message.trim() === "") {
        alert("Please enter a message.");
        return;
      }


      const newMessageElement = document.createElement('div');
      newMessageElement.className = styles['message-item'];

      let replyHTML = '';
      if (replyTo) {
        replyHTML = `
      < div class="${styles['reply-container']}" >
        <span class="${styles['reply-text']}">${replyTo}</span>
          </div >
    `;
      }

      newMessageElement.innerHTML = `
        ${replyHTML}
  <div class="${styles['message-content']}">
    <div class="${styles['message-header']}">
    </div>
    <div class="${styles['message-body']}">${message}</div>
    <button class="${styles['reply-button']}" onclick="replyToMessage('${message}')">Responder</button>
  </div>
  `;

      document.getElementById('displayMessageArea').appendChild(newMessageElement);

      document.getElementById('messageInput').value = "";
      document.getElementById('replyTo').innerText = "";
      document.getElementById('replyContainer').style.display = 'none';
    };

    window.replyToMessage = function (message) {
      const replyToContainer = document.getElementById('replyContainer');
      const replyToText = document.getElementById('replyTo');
      replyToText.innerText = message;
      replyToContainer.style.display = 'block';

      const messageInput = document.getElementById('messageInput');
      messageInput.focus();
    };

    window.cancelReply = function () {
      document.getElementById('replyTo').innerText = '';
      document.getElementById('replyContainer').style.display = 'none';
    };

    updateRoutineButton.addEventListener("click", () => {
      routineDialog.showModal();
    });

    cancelRoutineButton.addEventListener("click", () => {
      routineDialog.close();
    });

    document.getElementById('saveRoutine').addEventListener('click', (e) => {
      e.preventDefault();
      const routineType = document.getElementById('routineType').value;
      const routineDuration = document.getElementById('routineDuration').value;
      const routineItem = document.createElement('div');
      routineItem.classList.add(styles['list-item']);
      routineItem.innerHTML = `< strong > ${routineType}</strong > - ${routineDuration} minutos`;
      routineList.appendChild(routineItem);
      routineDialog.close();
    });

    updateTipButton.addEventListener("click", () => {
      tipDialog.showModal();
    });

    cancelTipButton.addEventListener("click", () => {
      tipDialog.close();
    });

    document.getElementById('saveTip').addEventListener('click', (e) => {
      e.preventDefault();
      const tipType = document.getElementById('tipType').value;
      const tipDescription = document.getElementById('tipDescription').value;
      const tipItem = document.createElement('div');
      tipItem.classList.add(styles['list-item']);
      tipItem.innerHTML = `< strong > ${tipType}</strong > - ${tipDescription} `;
      tipList.appendChild(tipItem);
      tipDialog.close();
    });
  };

  return {
    pageContent,
    logic
  };
}
