const formElement = document.getElementById('formElement');
const nameElement = document.getElementById('nameElement');
const autorElement = document.getElementById('autorElement');
const message = document.getElementById('message');

let valueName = '';
let valueAuthor = '';

// Listeners
formElement.addEventListener('submit', enviarDatos);
nameElement.addEventListener('input', updateName);
autorElement.addEventListener('input', updateAuthor);

function enviarDatos(event) {
    event.preventDefault();

    if (!valueName || !valueAuthor) {
        message.style.display = 'block';
        return;
    } else {
        message.style.display = 'none';
    }
    
    const datos = { nameTask: valueName, authorName: valueAuthor };

    processFormData(datos);
    clearFields();
}

function updateName(event) {
    valueName = event.target.value;
}

function updateAuthor(event) {
    valueAuthor = event.target.value;
}

function processFormData(data) {
    console.log(data);
}

function clearFields() {
    nameElement.value = '';
    autorElement.value = '';
}