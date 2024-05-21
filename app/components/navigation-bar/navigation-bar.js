import styles from './navigation-bar.css';
import 'boxicons';

export function NavigationBar(){
  return `
  <div class="${styles.container}">
    <box-icon name='user'></box-icon>
  </div>
  `;
}