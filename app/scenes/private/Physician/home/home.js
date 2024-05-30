import styles from './home.css';
import 'boxicons';
import 'bootstrap';
import * as echarts from 'echarts';

export function HomeScene() {
  const roleID = localStorage.getItem('rol');

  let pageContent;

  if (roleID === '1') {
    pageContent = /*html*/`
      <section class="${styles['grid-container']}">
        <div class="${styles['left-container']}">
          <div id="routineList" class="${styles['list-container']}"></div>
        </div>

        <div id="my-id"></div>

        <div class="${styles['other-container']}">
          <div id="tipList" class="${styles['list-container']}"></div>
        </div>
  
        <div class="${styles['right-progress']}">
          <div id="${styles.echart}"></div>
          <div id="${styles.barEchart}"></div>
          
        </div>
        <div class="${styles['right-container']}">
          <div class="${styles['forum-container']}">
            <div class="${styles['create-post-container']}">
              <div class="${styles['create-post-header']}">
                <h3 class="${styles['text']}">Create New Subject</h3>
              </div>
              <div class="${styles['create-post-body']}">
                <div class="${styles['input-container']}">
                  <input class="${styles.texForo}" id="topicTitleInput" type="text" placeholder="Subject" required />
                  <textarea class="${styles.texForo1}" id="topicMessageInput" placeholder="Message" required></textarea>
                  <div class="${styles['container-button']}">
                    <button class="${styles['boton-publish']}" id="createTopicButton">Publish</button>
                  </div>
                  
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
    pageContent = /*html*/`
      <section class="${styles['grid-container-doctor']}">
        <div class="${styles['left-container-doctor']}">
          <div class="${styles.contBottom}">
            <button type="button" id="updateRoutine" class="${styles.newTip}">Add Routine</button>
          </div>
          <div id="routineList" class="${styles['list-container']}"></div>
        </div>

        <div id="my-id"></div>

        <div class="${styles['other-container-doctor']}">
          <div class="${styles.contBottom}">
            <button type="button" id="updateTip" class="${styles.newTip}">Add Tip</button>
          </div>
          <div id="tipList" class="${styles['list-container']}"></div>
        </div>

        <div class="${styles['right-container-doctor']}">
          <div class="${styles['forum-container']}">
            <div class="${styles['create-post-container']}">
              <div class="${styles['create-post-header']}">
                <p class="${styles['text']}">Create New Subject</p>
              </div>
              <div class="${styles['create-post-body']}">
                <div class="${styles['input-container']}">
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
            <h1 class="${styles['dialog-title']}">Crear Rutina</h1>
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
            <h1 class="${styles['dialog-title']}">Crear Tip</h1>
            <label for="tipType">Tipo de Tip:</label>
            <input type="text" id="tipType" name="tipType" required><br><br>
            <label for="tipDescription">Descripción:</label>
            <textarea id="tipDescription" name="tipDescription" required></textarea>
          </section>
          <div class="${styles['dialog-buttons']}">
            <button type="button" id="cancelTip" formmethod="dialog">Cancelar</button>
            <button type="submit" id="saveTip">Guardar</button>
          </div>
        </form>
      </dialog>
    `;
  }

  const logic = async () => {
    const updateRoutineButton = document.getElementById("updateRoutine");
    const routineDialog = document.getElementById("routineDialog");
    const routineList = document.getElementById("routineList");
    const cancelRoutineButton = document.getElementById("cancelRoutine");

    const grafico = document.getElementById(styles.echart);
    const barEcharset = document.getElementById(styles.barEchart);
    const closeRoutine = document.getElementById(styles.cancelRoutine);

    // Ensure the DOM is fully rendered before initializing ECharts
    requestAnimationFrame(() => {
      const myChart = echarts.init(grafico);
      const myOtherCharset = echarts.init(barEcharset);
      myChart.setOption({
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: 'white' // Cambia el color del texto de la leyenda a blanco
          }
        },
        series: [
          {
            name: 'Routines',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white' // Establecer el color del texto enfocado en blanco
              }
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 10,  name: 'Routine Sleep', itemStyle: { color: '#a884e9' }, label: { textStyle: { color: 'white' } } }, // Naranja
              { value: 10,  name: 'Routine Diet', itemStyle: { color: '#8fbdd3' }, label: { textStyle: { color: 'white' } } }, // Cyan
              { value: 4,  name: 'Routine Sport', itemStyle: { color: '#c4e884' }, label: { textStyle: { color: 'white' } } }, // Magenta
              { value: 7,  name: 'Other', itemStyle: { color: '#ff8533' }, label: { textStyle: { color: 'white' } } }, // Establecer el color del nombre "Other" en blanco
            ],
          }
        ]
      });
      
      myOtherCharset.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: 'white' // Cambia el color de los nombres de las categorías en el eje x a blanco
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'white' // Cambia el color de los valores en el eje y a blanco
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#ff8533' },    // Color inicial
                  { offset: 1, color: '#c59eff' }     // Color final
                ]
              }
            },
            label: {
              show: true,
              color: '#000' // Cambia el color del texto de las etiquetas de los datos en blanco
            },
            showBackground: true,
            backgroundStyle: {
              color: '#fff'
            }
          }
        ]
      });
    });
    
    const updateTipButton = document.getElementById("updateTip");
    const tipDialog = document.getElementById("tipDialog");
    const tipList = document.getElementById("tipList");
    const cancelTipButton = document.getElementById("cancelTip");

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
            <h3 class = "${styles['text-topic']}">${topicTitle}</h3>
          </div>
          <div class="${styles['topic-body']}">${topicMessage}</div>
          <div class="${styles['reply-container']}">
            <div class="${styles['reply-area']}" id="replyArea-${topicTitle}"></div>
            <div class="${styles['button-reply']}"><button class="${styles['reply-button']}" onclick="showReplyForm('${topicTitle}')">Reply</button></div>
          </div>
          <form id="replyForm-${topicTitle}" class="${styles['reply-form']}" style="display: none;">
            <textarea class="${styles['reply-input']}" placeholder="Escribe tu respuesta"></textarea>
            <div class="${styles['buttons-reply']}">
             <button type="button" onclick="submitReply('${topicTitle}')" class="${styles['btn-reply']}">Enviar</button>
             <button type="button" onclick="hideReplyForm('${topicTitle}')" class="${styles['-reply']}">Cancelar</button>
            </div>
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

      const userId = localStorage.getItem('user_id');

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

    if (cancelRoutineButton) {
      cancelRoutineButton.addEventListener("click", () => {
        routineDialog.close();
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

    if (cancelTipButton) {
      cancelTipButton.addEventListener("click", () => {
        tipDialog.close();
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
