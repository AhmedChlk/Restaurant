import '../style/menu.css';
import menu from '../assets/data/menu.json';
import image from '../assets/images/3d-burger.jpeg'

function displayMenu(burgers) {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    burgers.forEach(burger => {
        const burgerCard = document.createElement('div');
        burgerCard.classList.add('burger-card');

        const burgerImage = document.createElement('img');
        burgerImage.src = image;
        burgerImage.alt = burger.name;

        const burgerName = document.createElement('h2');
        burgerName.textContent = burger.name;

        const burgerDescription = document.createElement('p');
        burgerDescription.textContent = burger.description;

        const burgerPrice = document.createElement('p');
        burgerPrice.classList.add('burger-price');
        burgerPrice.textContent = `$${burger.price.toFixed(2)}`;

        burgerCard.appendChild(burgerImage);
        burgerCard.appendChild(burgerName);
        burgerCard.appendChild(burgerDescription);
        burgerCard.appendChild(burgerPrice);
        menuContainer.appendChild(burgerCard);
    });

    content.innerHTML = '';
    content.appendChild(menuContainer);
}

function fetchMenu() {
    displayMenu(menu.burgers);
}

export { fetchMenu };
