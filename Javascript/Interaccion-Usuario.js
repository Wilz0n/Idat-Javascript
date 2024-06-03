// Obtener elementos por ID
const mainTitle = document.getElementById('main-title');
const changeTitleButton = document.getElementById('change-title');
const addParagraphButton = document.getElementById('add-paragraph');
const toggleStyleButton = document.getElementById('toggle-style');

// Almacenar el título original
const originalTitle = mainTitle.textContent;

// Modificar el texto del título
changeTitleButton.addEventListener('click', () => {
    if (mainTitle.textContent === originalTitle) {
        mainTitle.textContent = 'Título Cambiado';
    } else {
        mainTitle.textContent = originalTitle;
    }
});

// Agregar un párrafo
addParagraphButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'Este es un <strong>nuevo</strong> párrafo.';
    newParagraph.classList.add('card');
    content.appendChild(newParagraph);
});

// Alternar estilos
toggleStyleButton.addEventListener('click', () => {
    const description = document.querySelector('.description');
    description.classList.toggle('card-red');
});

// Ejemplo de DOM Traversing
const content = document.querySelector('#content');
console.log(content.children[0]); // Primer hijo de #content

const description = document.querySelector('.description');
console.log(description.parentElement); // Padre del elemento .description
