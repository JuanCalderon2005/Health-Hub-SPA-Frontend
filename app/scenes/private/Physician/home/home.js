// import styles from './home.css';
// import 'boxicons';

// export function HomeScene() {
//   const pageContent = `
//     <section class="${styles['grid-container']}">
//       <div class="${styles['left-container']}">
//         <div class="${styles.contBottom}">
//           <button type="button" id="updateRoutine" class="${styles.newTip}">Agregar Rutina</button>
//         </div>
//         <div id="routineList" class="${styles['list-container']}"></div>
//       </div>

//       <div id="my-id"></div>

//       <div class="${styles['other-container']}">
//         <div class="${styles.contBottom}">
//           <button type="button" id="updateTip" class="${styles.newTip}">Agregar Tip</button>
//         </div>
//         <div id="tipList" class="${styles['list-container']}"></div>
//       </div>

//       <div class=${styles['right-container']}>
//         <div class=${styles['forum-container']}>
//           <div class=${styles['create-post-container']}>
//             <div class=${styles['create-post-header']}>
//               <p class=${styles['text']}>Create New Subject</p>
//             </div>
//             <div class=${styles['create-post-body']}>
//               <div class=${styles['input-container']}>
//                 <span class=${styles['input-icon']}>📝</span>
//                 <input class="${styles.texForo}" id="topicTitleInput" type="text" placeholder="Subject" />
//                 <textarea class="${styles.texForo1}" id="topicMessageInput" placeholder="Message"></textarea>
//                 <button class=${styles['boton-send']} onclick="createTopic()">Send</button>
//               </div>
//             </div>
//           </div>
//           <div class="${styles['topicArea']}" id="topicDisplayArea">
//           </div>
//         </div>
//       </div>
//     </section>

//     <dialog id="routineDialog" class="${styles.routineDialogContainer}">
//       <form method="dialog" class="${styles.foms}">
//         <section class="${styles['dialog-content']}">
//           <h1>Crear Rutina</h1>
//           <label for="routineType">Tipo de Rutina:</label>
//           <input type="text" id="routineType" name="routineType" required><br><br>
//           <label for="routineDuration">Duración (minutos):</label>
//           <input type="number" id="routineDuration" name="routineDuration" required>
//         </section>
//         <section class="${styles['dialog-buttons']}">
//           <button type="button" id="cancelRoutine">Cancelar</button>
//           <button type="submit" id="saveRoutine">Guardar</button>
//         </section>
//       </form>
//     </dialog>

//     <dialog id="tipDialog" class="${styles.tipDialogContainer}">
//       <form method="dialog" class="${styles.foms}">
//         <section class="${styles['dialog-content']}">
//           <h1>Crear Tip</h1>
//           <label for="tipType">Tipo de Tip:</label>
//           <input type="text" id="tipType" name="tipType" required><br><br>
//           <label for="tipDescription">Descripción:</label>
//           <textarea id="tipDescription" name="tipDescription" required></textarea>
//         </section>
//         <section class="${styles['dialog-buttons']}">
//           <button type="button" id="cancelTip">Cancelar</button>
//           <button type="submit" id="saveTip">Guardar</button>
//         </section>
//       </form>
//     </dialog>
//   `;

//   const logic = async () => {
//     const $myContainer = document.getElementById('my-id');
//     const response = await fetch('http://localhost:3000/user');
//     const respJson = await response.json();
//     console.log(respJson);

//     const updateRoutineButton = document.getElementById("updateRoutine");
//     const cancelRoutineButton = document.getElementById("cancelRoutine");
//     const routineDialog = document.getElementById("routineDialog");
//     const routineList = document.getElementById("routineList");

//     const updateTipButton = document.getElementById("updateTip");
//     const cancelTipButton = document.getElementById("cancelTip");
//     const tipDialog = document.getElementById("tipDialog");
//     const tipList = document.getElementById("tipList");

//     window.createTopic = function () {
//       const topicTitle = document.getElementById('topicTitleInput').value;
//       const topicMessage = document.getElementById('topicMessageInput').value;

//       if (topicTitle.trim() === "" || topicMessage.trim() === "") {
//         alert("Por favor, completa el título y el mensaje.");
//         return;
//       }

//       const newTopicElement = document.createElement('div');
//       newTopicElement.className = styles['topic-item'];

//       newTopicElement.innerHTML = `
//         <div class="${styles['topic-header-FF']}">
//         <div class="${styles['topic-header']}">
//           <h3>${topicTitle}</h3>
//         </div>
//         <div class="${styles['topic-body']}">${topicMessage}</div>
//         <div class="${styles['reply-container']}">
//         <div class="${styles['reply-area']}" id="replyArea-${topicTitle}">
//         </div>
//         <button class="${styles['reply-button']}" onclick="showReplyForm('${topicTitle}')">Responder</button>
//         </div>
//         <form id="replyForm-${topicTitle}" class="${styles['reply-form']}" style="display: none;">
//         <textarea class="${styles['reply-input']}" placeholder="Escribe tu respuesta"></textarea>
//         <button type="button" onclick="submitReply('${topicTitle}')">Enviar</button>
//         <button type="button" onclick="hideReplyForm('${topicTitle}')">Cancelar</button>
//         </form>
//         </div>
//       `;

//       document.getElementById('topicDisplayArea').appendChild(newTopicElement);

//       document.getElementById('topicTitleInput').value = "";
//       document.getElementById('topicMessageInput').value = "";
//     };

//     window.showReplyForm = function (topicTitle) {
//       const replyForm = document.getElementById(`replyForm-${topicTitle}`);
//       replyForm.style.display = 'block';
//     };

//     window.hideReplyForm = function (topicTitle) {
//       const replyForm = document.getElementById(`replyForm-${topicTitle}`);
//       replyForm.style.display = 'none';
//     };

//     window.submitReply = function (topicTitle) {
//       const replyForm = document.getElementById(`replyForm-${topicTitle}`);
//       const replyInput = replyForm.querySelector('textarea').value;

//       if (replyInput.trim() === "") {
//         alert("Por favor, escribe un mensaje.");
//         return;
//       }

//       const replyArea = document.getElementById(`replyArea-${topicTitle}`);
//       const replyElement = document.createElement('div');
//       replyElement.className = styles['reply-item'];
//       replyElement.innerHTML = `<div class="${styles['reply-body']}">${replyInput}</div>`;
//       replyArea.appendChild(replyElement);

//       replyForm.querySelector('textarea').value = '';
//       replyForm.style.display = 'none';
//     };

//     updateRoutineButton.addEventListener("click", () => {
//       routineDialog.showModal();
//     });

//     cancelRoutineButton.addEventListener("click", () => {
//       routineDialog.close();
//     });

//     document.getElementById('saveRoutine').addEventListener('click', (e) => {
//       e.preventDefault();
//       const routineType = document.getElementById('routineType').value;
//       const routineDuration = document.getElementById('routineDuration').value;
//       const routineItem = document.createElement('div');
//       routineItem.classList.add(styles['list-item']);
//       routineItem.innerHTML = `<strong>${routineType}</strong> - ${routineDuration} minutos`;
//       routineList.appendChild(routineItem);
//       routineDialog.close();
//     });

//     updateTipButton.addEventListener("click", () => {
//       tipDialog.showModal();
//     });

//     cancelTipButton.addEventListener("click", () => {
//       tipDialog.close();
//     });

//     document.getElementById('saveTip').addEventListener('click', (e) => {
//       e.preventDefault();
//       const tipType = document.getElementById('tipType').value;
//       const tipDescription = document.getElementById('tipDescription').value;
//       const tipItem = document.createElement('div');
//       tipItem.classList.add(styles['list-item']);
//       tipItem.innerHTML = `<strong>${tipType}</strong> - ${tipDescription}`;
//       tipList.appendChild(tipItem);
//       tipDialog.close();
//     });
//   };

//   return {
//     pageContent,
//     logic
//   };
// }


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
        <div class=${styles['forum-container']}>
          <div class=${styles['create-post-container']}>
            <div class=${styles['create-post-header']}>
              <p class=${styles['text']}>Create New Subject</p>
            </div>
            <div class=${styles['create-post-body']}>
              <div class=${styles['input-container']}>
                <span class=${styles['input-icon']}>📝</span>
                <input class="${styles.texForo}" id="topicTitleInput" type="text" placeholder="Subject" required />
                <textarea class="${styles.texForo1}" id="topicMessageInput" placeholder="Message" required></textarea>
                <button class=${styles['boton-send']} onclick="createTopic()">Send</button>
              </div>
            </div>
          </div>
          <div class="${styles['topicArea']}" id="topicDisplayArea">
          </div>
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
          <button type="button" id="cancelRoutine" formmethod="dialog">Cancelar</button>
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
          <button type="button" id="cancelTip" formmethod="dialog">Cancelar</button>
          <button type="submit" id="saveTip">Guardar</button>
        </section>
      </form>
    </dialog>
  `;

  const logic = async () => {
    const $myContainer = document.getElementById('my-id');
    const response = await fetch('http://localhost:3000/user');
    const respJson = await response.json();
    console.log(respJson);

    const updateRoutineButton = document.getElementById("updateRoutine");
    const routineDialog = document.getElementById("routineDialog");
    const routineList = document.getElementById("routineList");

    const updateTipButton = document.getElementById("updateTip");
    const tipDialog = document.getElementById("tipDialog");
    const tipList = document.getElementById("tipList");

    const userId = 3; // Assuming you have a way to get the user's ID

    window.createTopic = function () {
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
    };

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

      // Send the reply to the server
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
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

    updateRoutineButton.addEventListener("click", () => {
      routineDialog.showModal();
    });

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

    updateTipButton.addEventListener("click", () => {
      tipDialog.showModal();
    });

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
  };

  return {
    pageContent,
    logic
  };
}
