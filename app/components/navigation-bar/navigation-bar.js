import styles from './navigation-bar.css';
import 'boxicons';

export function NavigationBar(
  { user, userImage } =
    { user: 'User', userImage: 'https://via.placeholder.com/150' }
) {

  return `
  <div class="${styles.container}">
    <p>${user}</p>
    <box-icon name='user'></box-icon>
    <img src="${userImage}" alt="User image">
  </div>
  `;
}