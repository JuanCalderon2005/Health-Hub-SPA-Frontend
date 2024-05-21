import { navigateTo } from "../../../../Router";
import { logOut } from "../../../../helpers";
import { NavigationBar } from "../../../navigation-bar/navigation-bar";
import { SidebarMenu } from "../../../sidebar-menu/sidebar-menu";
import styles from './dashboard-layout.css';

import 'boxicons'


export function DashboardLayout(pageContent, logic, navbarData, sidebarData,) {

  const root = document.getElementById('root');
  sidebarData = [
    { href: '/dashboard', icon: `<box-icon name="home-alt-2" color="#FFF" ></box-icon>` },
    { href: '/dashboard/forms', icon: `<box-icon name="plus" color="#FFF"></box-icon>` },
  ];
  
  navbarData = {
    user: 'Helth-hub',
    userImage: 'https://randomuser.me/api/portraits/men/75.jpg',
  };

  root.innerHTML = `
  <div class="${styles.container}">
    <div class="${styles.sidebar}">
      ${SidebarMenu(sidebarData)}
    </div>
    <div class="${styles.navbar}">
      ${NavigationBar(navbarData)}
    </div>
    <div class="${styles.main}">
      ${pageContent}
    </div>
  </div>
  `;

  logic();

  sidebarData.forEach(({ href, icon, label }) => {
    document.getElementById(href).addEventListener('click', () => {
      navigateTo(href);
    });
  });

  document.getElementById('logout').addEventListener('click', logOut)
  
}