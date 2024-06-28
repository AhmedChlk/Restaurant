import '../style/home.css';
import coverImage from '../assets/images/3d-burger-nobg.png';

const content = document.getElementById("content");



function createHome() {
    const container = document.createElement("div");
    container.classList.add("container-home");

    const textContainer = document.createElement("div");
    textContainer.classList.add('text-container');
    const title = document.createElement("h1");
    title.textContent = "HOME BURGER";

    const paragraphe = document.createElement('p');
    paragraphe.textContent = "Découvrez l'excellence culinaire avec HomeBurger, où chaque bouchée est une explosion de saveurs. Nos burgers artisanaux sont préparés avec des ingrédients frais et de qualité, pour vous offrir une expérience gustative inoubliable. Rejoignez-nous pour un voyage culinaire unique et savourez le meilleur burger en ville";
    
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const menuButton = document.createElement("button");
    menuButton.textContent = "Voir le Menu";
    buttonContainer.appendChild(menuButton);

    textContainer.appendChild(title);
    textContainer.appendChild(paragraphe);
    textContainer.appendChild(buttonContainer);
    


    const imageContainer = document.createElement("div");
    imageContainer.classList.add('image-container');

    const image = document.createElement("img");
    image.src = coverImage;
    image.alt = "Hamburger Image";
    imageContainer.appendChild(image);

    container.appendChild(textContainer);
    container.appendChild(imageContainer);
    content.appendChild(container);
}

export { createHome };
