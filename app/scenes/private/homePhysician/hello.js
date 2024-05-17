
import './hello.css';

export function welcomePhysician() {
    const pageContent =`
    <div class='body'>
        <div class='container1'>1jusjsjdjjd</div>
        <div class='container2'>111</div>
    </div>
    `;

    const logic = () => {
        const content = document.querySelector('h2');
        content.addEventListener('click', () => {
            alert('Este es un saludo');
        });
    }

    return {
        pageContent,
        logic
    }
}