import styles from './sidebar-menu.css';
import 'boxicons';

export function SidebarMenu(data = []) {
  const path = window.location.pathname;

  // if path === href, add active class
  data.forEach((item) => {
    if (path === item.href) {
      item.active = true;
    }
  });

  return `
    <aside class="${styles["sidebar-menu"]}">
      <ul class="${styles["ul"]}">
        ${data.map((item) => `
          <li class="${item.active ? styles.active : ''}">
            <button id="${item.href}" type="button">
              <box-icon name='home-alt-2' color="#FFF" class="${styles.iconos}"></box-icon>
            </button>
          </li>
        `).join('')}
        <li><button id="logout" type="button"><box-icon name='log-in' color="#FFF" class="${styles.iconos}"></box-icon> </button></li>
      </ul>
    </aside>
  `;
}
