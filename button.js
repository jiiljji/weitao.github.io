const foldButton = document.querySelector('.foldButton');
const navList = document.querySelector('.navList');

foldButton.addEventListener('click', () => {
    if(navList.style.display === 'none') {
        navList.style.display = 'block';
        foldButton.src = 'images/cross-8.png';
    } else {
        navList.style.display = 'none';
        foldButton.src = 'images/icon-8.png';
    }
});
