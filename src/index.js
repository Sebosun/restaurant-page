import generate from './createElements';
import generateHome from './createElements';
import generateMenu from './menu';

const tabsSelector = document.querySelectorAll('#tabs');

generateHome();

const clearContent = () =>{
    const contentSelector = document.querySelector('#content');
    contentSelector.innerHTML = '';
    console.log('content has been cleared');
}

// clearContent();


tabsSelector.forEach((tab) => {
    tab.addEventListener('click', (e) =>{
        console.log(e.target.id);
        if (e.target.id === 'home'){
            clearContent();
            generateHome();
        }
        else if (e.target.id === 'menu'){
            clearContent();
            generateMenu();

        }
        else if (e.target.id === 'contact'){
            console.log('TODO')
        }
    })
});

