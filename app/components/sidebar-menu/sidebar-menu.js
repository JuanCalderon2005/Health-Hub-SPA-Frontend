import styles from './sidebar-menu.css';
import 'boxicons';

export function SidebarMenu(data = []) {
  const path = window.location.pathname;

  return `
    <aside class="${styles["sidebar-menu"]}">
      <ul class="${styles["ul"]}">
        ${data.map((item) => {
          const isActive = path === item.href;
          return `
          
            <li class="${isActive ? styles.active : ''}">
              <button id="${item.href}" type="button" >${item.icon}</button>
              
            </li>
          `;
        }).join('')}
        <li><button id="logout" type="button"><box-icon name='log-in' color="#FFF" class="${styles.iconos}"></box-icon> </button></li>
      </ul>
    </aside>
  `;
}
