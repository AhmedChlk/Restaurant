import '../style/contact.css';

const content = document.getElementById("content");

function createContact() {
    const container = document.createElement("div");
    container.classList.add('container-contact');

    const text = document.createElement("h2");
    text.textContent = "Restons en Contact!"
    container.appendChild(text);

    /* Creation du formulaire */
    const form = document.createElement('form');
    form.setAttribute('method','post');
    form.setAttribute('action','#');


    /* creation du Champ email */
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for",'email');
    emailLabel.textContent ='Email :';

    const emailInput = document.createElement("input");
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', true);

    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    /* Creation champ de text */
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute("for","message");
    messageLabel.textContent = "Votre Message :";
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('required', true);
    messageInput.setAttribute('rows', '8');
    messageInput.setAttribute('cols', '35');

    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    /* creation du submit button */
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.textContent = 'Envoyer';

    form.appendChild(submitButton);

    container.appendChild(form);
    content.appendChild(container)
}

export{createContact};