const generateContact = () => {
    const contentSelector = document.querySelector('#content');
    let descriptionDiv = document.createElement('div');


    descriptionDiv.textContent = `Contact us @Facebook and +48 5*******2. Bohaterów Warszawy 15`

    contentSelector.appendChild(descriptionDiv);

}

export default generateContact;