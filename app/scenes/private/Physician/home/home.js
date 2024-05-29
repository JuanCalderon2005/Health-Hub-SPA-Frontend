import styles from './home.css';
import 'boxicons';

export function HomeScene() {
  // Obtener el rol del almacenamiento local
  const roleID = localStorage.getItem('rol');

  let pageContent;

  if (roleID === '1') {
    // Contenido para el rol 1
    pageContent = `
      <section class="${styles['grid-container']}">
        <div class="${styles['left-container']}">
          <div id="routineList" class="${styles['list-container']}"></div>
        </div>

        <div id="my-id"></div>

        <div class="${styles['other-container']}">
          <div id="tipList" class="${styles['list-container']}"></div>
        </div>
        <div class="${styles['right-container']}">
          <div class="${styles['forum-container']}">
            <div class="${styles['create-post-container']}">
              <div class="${styles['create-post-header']}">
                <p class="${styles['text']}">Create New Subject</p>
              </div>
              <div class="${styles['create-post-body']}">
                <div class="${styles['input-container']}">
                  <span class="${styles['input-icon']}">📝</span>
                  <input class="${styles.texForo}" id="topicTitleInput" type="text" placeholder="Subject" required />
                  <textarea class="${styles.texForo1}" id="topicMessageInput" placeholder="Message" required></textarea>
                  <button class="${styles['boton-send']}" id="createTopicButton">Send</button>
                </div>
              </div>
            </div>
            <div class="${styles['topicArea']}" id="topicDisplayArea">
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (roleID === '2') {
    // Contenido para el rol 2
    pageContent = `
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

        <div class="${styles['right-container']}">
          <div class="${styles['forum-container']}">
            <div class="${styles['create-post-container']}">
              <div class="${styles['create-post-header']}">
                <p class="${styles['text']}">Create New Subject</p>
              </div>
              <div class="${styles['create-post-body']}">
                <div class="${styles['input-container']}">
                  <span class="${styles['input-icon']}">📝</span>
                  <input class="${styles.texForo}" id="topicTitleInput" type="text" placeholder="Subject" required />
                  <textarea class="${styles.texForo1}" id="topicMessageInput" placeholder="Message" required></textarea>
                  <button class="${styles['boton-send']}" id="createTopicButton">Send</button>
                </div>
              </div>
            </div>
            <div class="${styles['topicArea']}" id="topicDisplayArea">
            </div>
          </div>
        </div>
      </section>

      <dialog id="routineDialog" class="${styles.routineDialogContainer}">
        <form method="dialog" class="${styles.forms}">
          <section class="${styles['dialog-content']}">
            <h1>Crear Rutina</h1>
            <label for="routineType">Tipo de Rutina:</label>
            <input type="text" id="routineType" name="routineType" required><br><br>
            <label for="routineDuration">Duración (minutos):</label>
            <input type="number" id="routineDuration" name="routineDuration" required>
          </section>
          <section class="${styles['dialog-buttons']}">
            <button type="button" id="cancelRoutine" formmethod="dialog">Cancelar</button>
            <button type="submit" id="saveRoutine">Guardar</button>
          </section>
        </form>
      </dialog>

      <dialog id="tipDialog" class="${styles.tipDialogContainer}">
        <form method="dialog" class="${styles.forms}">
          <section class="${styles['dialog-content']}">
            <h1>Crear Tip</h1>
            <label for="tipType">Tipo de Tip:</label>
            <input type="text" id="tipType" name="tipType" required><br><br>
            <label for="tipDescription">Descripción:</label>
            <textarea id="tipDescription" name="tipDescription" required></textarea>
          </section>
          <section class="${styles['dialog-buttons']}">
            <button type="button" id="cancelTip" formmethod="dialog">Cancelar</button>
            <button type="submit" id="saveTip">Guardar</button>
          </section>
        </form>
      </dialog>
    `;
  }

  const logic = async () => {
    const updateRoutineButton = document.getElementById("updateRoutine");
    const routineDialog = document.getElementById("routineDialog");
    const routineList = document.getElementById("routineList");

    const updateTipButton = document.getElementById("updateTip");
    const tipDialog = document.getElementById("tipDialog");
    const tipList = document.getElementById("tipList");

    if (document.getElementById("createTopicButton")) {
      document.getElementById("createTopicButton").addEventListener("click", createTopic);
    }

    function createTopic() {
      const topicTitle = document.getElementById('topicTitleInput').value;
      const topicMessage = document.getElementById('topicMessageInput').value;

      if (topicTitle.trim() === "" || topicMessage.trim() === "") {
        alert("Por favor, completa el título y el mensaje.");
        return;
      }

      const newTopicElement = document.createElement('div');
      newTopicElement.className = styles['topic-item'];

      newTopicElement.innerHTML = `
        <div class="${styles['topic-header-FF']}">
          <div class="${styles['topic-header']}">
            <h3>${topicTitle}</h3>
          </div>
          <div class="${styles['topic-body']}">${topicMessage}</div>
          <div class="${styles['reply-container']}">
            <div class="${styles['reply-area']}" id="replyArea-${topicTitle}"></div>
            <button class="${styles['reply-button']}" onclick="showReplyForm('${topicTitle}')">Responder</button>
          </div>
          <form id="replyForm-${topicTitle}" class="${styles['reply-form']}" style="display: none;">
            <textarea class="${styles['reply-input']}" placeholder="Escribe tu respuesta"></textarea>
            <button type="button" onclick="submitReply('${topicTitle}')">Enviar</button>
            <button type="button" onclick="hideReplyForm('${topicTitle}')">Cancelar</button>
          </form>
        </div>
      `;

      document.getElementById('topicDisplayArea').appendChild(newTopicElement);

      document.getElementById('topicTitleInput').value = "";
      document.getElementById('topicMessageInput').value = "";
    }

    window.showReplyForm = function (topicTitle) {
      const replyForm = document.getElementById(`replyForm-${topicTitle}`);
      replyForm.style.display = 'block';
    };

    window.hideReplyForm = function (topicTitle) {
      const replyForm = document.getElementById(`replyForm-${topicTitle}`);
      replyForm.style.display = 'none';
    };

    window.submitReply = function (topicTitle) {
      const replyForm = document.getElementById(`replyForm-${topicTitle}`);
      const replyInput = replyForm.querySelector('textarea').value;

      if (replyInput.trim() === "") {
        alert("Por favor, escribe un mensaje.");
        return;
      }

      const replyArea = document.getElementById(`replyArea-${topicTitle}`);
      const replyElement = document.createElement('div');
      replyElement.className = styles['reply-item'];
      replyElement.innerHTML = `<div class="${styles['reply-body']}">${replyInput}</div>`;
      replyArea.appendChild(replyElement);

      replyForm.querySelector('textarea').value = '';
      replyForm.style.display = 'none';

      // Enviar la respuesta al servidor
      fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          comment: replyInput
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Éxito:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

    if (updateRoutineButton) {
      updateRoutineButton.addEventListener("click", () => {
        routineDialog.showModal();
      });
    }

    if (routineDialog) {
      routineDialog.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const routineType = document.getElementById('routineType').value;
        const routineDuration = document.getElementById('routineDuration').value;
        const routineItem = document.createElement('div');
        routineItem.classList.add(styles['list-item']);
        routineItem.innerHTML = `<strong>${routineType}</strong> - ${routineDuration} minutos`;
        routineList.appendChild(routineItem);
        routineDialog.close();
      });
    }

    if (updateTipButton) {
      updateTipButton.addEventListener("click", () => {
        tipDialog.showModal();
      });
    }

    if (tipDialog) {
      tipDialog.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const tipType = document.getElementById('tipType').value;
        const tipDescription = document.getElementById('tipDescription').value;
        const tipItem = document.createElement('div');
        tipItem.classList.add(styles['list-item']);
        tipItem.innerHTML = `<strong>${tipType}</strong> - ${tipDescription}`;
        tipList.appendChild(tipItem);
        tipDialog.close();
      });
    }
  };
  
  return {
    logic,
    pageContent
  };
}
