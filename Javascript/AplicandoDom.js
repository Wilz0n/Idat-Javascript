 // JavaScript para manipular el DOM

        // getElements

        let doc = document;
        console.log(doc);

        let headElement = document.head;
        console.log(headElement);

        let bodyElement = document.body;
        console.log(bodyElement);

        // getElementById

        const header = document.getElementById('header');
        console.log(header);

        // querySelector

        const mainTitle = document.querySelector('.title');
        console.log(mainTitle);

        // querySelectorAll

        const navLinks = document.querySelectorAll('nav a');
        console.log(navLinks);

        // modifiedElements

        const headerTitle = document.getElementById('header-title');
        headerTitle.textContent = 'Nuevo Título del Encabezado';
        console.log(headerTitle.textContent);

        headerTitle.innerHTML = `<span>Título con HTML</span>`;
        console.log(headerTitle.innerHTML);

        // styles

        headerTitle.style.color = 'blue';
        console.log(headerTitle.style.color);

        headerTitle.classList.add('highlight', 'large-text');
        console.log(headerTitle.classList);

        headerTitle.classList.remove('highlight');
        console.log(headerTitle.classList);

        // Dom Traversing

        const listItem = document.querySelector('ul li');
        console.log(listItem.parentElement.parentElement);

        const firstItem = document.getElementById('item1');
        const nextItem = firstItem.nextElementSibling;
        console.log(nextItem);

        const nav = document.querySelector('nav');
        console.log(nav.children[0].children[1]);

        // Create element

        const newParagraph = document.createElement('p');
        const contentContainer = document.getElementById('content');

        newParagraph.textContent = 'Este párrafo fue creado con createElement.';

        newParagraph.classList.add('text-primary', 'mb-3');
        newParagraph.setAttribute('id', 'new-paragraph');

        contentContainer.appendChild(newParagraph);
        console.log(newParagraph);