import styles from "./navigation-bar.css";
import "boxicons";

export function NavigationBar() {
  return `
  <div class="${styles.container}">
  <div>
  <h3>Welcome to Health Hub</h3>

  </div>
  <div class="${styles.iconos}">
  <box-icon name='bell' type='solid' ></box-icon>
    <box-icon name='user'></box-icon>
 </div>
   
  </div>
  `;
}


