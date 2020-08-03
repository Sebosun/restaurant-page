import generateHome from "./createElements";

const generateMenu = () => {
    const contentSelector = document.querySelector('#content');

    let listaDiv = document.createElement('ul');
    let greenTea = document.createElement('li');
    let blackTea = document.createElement('li');
    let oolong   = document.createElement('li');
    let twojStary= document.createElement('li');
    
    greenTea.textContent = 'Green tea - 10$'
    blackTea.textContent = 'Black tea - 20$'
    oolong.textContent   = 'Oolong    - 30$'


    listaDiv.append(greenTea);
    listaDiv.append(blackTea);
    listaDiv.append(oolong);
    
    contentSelector.appendChild(listaDiv);


    // imageDiv.src = "./img/tea leaves.png";


    // contentSelector.appendChild(headerElement);
    
    // contentSelector.appendChild(imageDiv);
}

export default generateMenu;