
const generate = () => {
    const contentSelector = document.querySelector('#content');

    let headerElement = document.createElement('header');
    let descriptionDiv = document.createElement('div');
    let imageDiv = document.createElement('img');


    descriptionDiv.textContent = `This is the beginning of man's tragedy - for Nature is the stronger of the two. Man remains dependent on her, for in spite of everything she embraces him, like all else, within herself. All the great cultures are just so many defeats. Whole races remain, inwardly destroyed and broken, fallen into barrenness and spiritual decay, as corpses on the field. The fight against Nature is hopeless and yet - it will be fought out to the bitter end`;
    headerElement.textContent = 'Tea Shop - Imminent downfall';
    imageDiv.src = "./img/tea leaves.png";


    contentSelector.appendChild(headerElement);
    contentSelector.appendChild(descriptionDiv);
    contentSelector.appendChild(imageDiv);

}

export default generate;