import '@fortawesome/fontawesome-free/css/all.min.css';
import'./style/general.css';
import { createHome } from './js/home';
import { createContact } from './js/contact';

createHome();
const content = document.getElementById("content");
const navbar = document.querySelector('nav');
navbar.addEventListener('click',(event) =>{
    content.innerHTML = '';
    if(event.target.classList.contains("home-btn")){
        createHome();
    }else if (event.target.classList.contains("contact-btn")){
        createContact();
    }
})