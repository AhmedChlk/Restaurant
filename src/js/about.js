import '../style/about.css';
import ImageAbout from '../assets/images/about-restaurant.jpeg'
const content = document.getElementById("content");
function createAbout() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    
    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.classList.add('about-text-container');

    const title = document.createElement("h1");
    title.textContent = "OUVERTS TOUT LES JOURS DEPUIS 1990";
    aboutTextContainer.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Bienvenue à notre restaurant de burgers, où nous servons les meilleurs burgers depuis plus de 30 ans. Nos ingrédients sont frais et nos recettes sont conçues pour satisfaire tous les palais.";
    aboutTextContainer.appendChild(paragraph);

    aboutContainer.appendChild(aboutTextContainer);
    content.appendChild(aboutContainer);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add('about-image-container');

    const image = document.createElement("img");
    image.src = ImageAbout;
    image.alt = "About restaurant Image";
    imageContainer.appendChild(image);
    aboutContainer.appendChild(imageContainer);
}
export{createAbout};