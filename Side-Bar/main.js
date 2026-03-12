let sideBlocks = document.querySelectorAll('.side-blocks');
let mainBlocks = document.querySelectorAll('.main-blocks');
let sideText = document.querySelectorAll('.side-text');
let sideBarIcon = document.getElementById('side-bar-icon');
let sideBar = document.getElementById('side-bar');
let main = document.getElementById('main');

let isClicked = false;

function handleAction(){
    if(isClicked){
        sideBar.style.width = '15%';
        main.style.width = '85%';
        sideBlocks.forEach(block => {
            block.style.justifyContent = 'start';
            block.style.width = '80%';
            block.classList.add('side-blocks-shadow');
        });
        sideText.forEach(text => {
            text.style.display = 'flex';
        });
        isClicked = false;
    }
    else{
        sideBar.style.width = '5%';
        main.style.width = '95%';
        sideBlocks.forEach(block => {
            block.style.justifyContent = 'center';
            block.style.width = '50%';
            block.classList.remove('side-blocks-shadow');
        });
        sideText.forEach(text => {
            text.style.display = 'none';
        });
        isClicked = true;
    }
}

sideBarIcon.addEventListener('click', handleAction);