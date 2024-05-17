import styles from './home.css';

export function HomeScene() {

  const pageContent = `
    <p>Welcome to the home view.</p>
    <section class="${styles['grid-container']}">
    <div class="${styles['left-container']}">1</div>
      <div class="${styles['left-container']}">2</div>
      <div class="${styles['right-container']}">3</div>
     

    </section>
  `;

  const logic = () => {
    const h2Element = document.querySelector('p');
    h2Element.addEventListener('click', () => {
      alert('Hello from the home view');
    });
  };

  return {
    pageContent,
    logic
  }
}
