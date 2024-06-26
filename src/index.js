import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/general.css';
import { createHome } from './js/home';
import { createContact } from './js/contact';
import { createAbout } from './js/about';
import { fetchMenu } from './js/menu';

createHome();


const content = document.getElementById("content");
const homeButton = document.querySelector('.home-btn');
const contactButton = document.querySelector('.contact-btn');
const aboutButton = document.querySelector('.about-btn');
const menuButton = document.querySelector('.menu-btn');

//vider le contenue et charger le nouveau
function updateContent(createFunction) {
    content.innerHTML = '';
    createFunction();
}

homeButton.addEventListener('click', () => updateContent(createHome));
contactButton.addEventListener('click', () => updateContent(createContact));
aboutButton.addEventListener('click', () => updateContent(createAbout));
menuButton.addEventListener('click', () => updateContent(fetchMenu));
