import styles from "./navigation-bar.css";
import "boxicons";

export function NavigationBar() {
  const html = `
  <div class="${styles.container}">
      <div>
        <h3>Welcome to Health Hub</h3>
      </div>
      <div class="${styles.iconos}">
        <button id="bellButton" class="${styles.bellButton}" type="button">
          <box-icon name='bell' type='solid'></box-icon>
        </button>
        <box-icon name='user'></box-icon>
      </div>
      <dialog id="notificationsDialog" class="${styles.dialog}" >
        <div class="${styles.dialogContent}">
          <h4>Notifications</h4>
          <p>No new notifications</p>
          <button id="closeDialogButton">Close</button>
        </div>
      </dialog>
    </div>
  `
  const logic = () => {
    const bellButton = document.getElementById("bellButton");
    const notificationsDialog = document.getElementById("notificationsDialog");
    const buttomClose = document.getElementById("closeDialogButton");
    bellButton.addEventListener('click', () => {
      notificationsDialog.showModal()
    });
    buttomClose.addEventListener('click', () => {
      notificationsDialog.close();
    });
  }
  
  return { 
    html, 
    logic 
  };
}



