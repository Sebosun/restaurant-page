import generateHome from "./createElements";

const generateMenu = () => {
    const contentSelector = document.querySelector('#content');

    let descriptionDiv = document.createElement('div');
    
    descriptionDiv.textContent = `Black tea - 50$ /n`;
    // imageDiv.src = "./img/tea leaves.png";


    // contentSelector.appendChild(headerElement);
    contentSelector.appendChild(descriptionDiv);
    // contentSelector.appendChild(imageDiv);
}

export default generateMenu;