let sideBlocks = document.querySelectorAll('.side-blocks');
let mainBlocks = document.querySelectorAll('.main-blocks');
let sideBarIcon = document.getElementById('side-bar-icon');
let sideBar = document.getElementById('side-bar');
let main = document.getElementById('main');

let isClicked = false;

function handleAction(){
    if(isClicked){
        sideBar.style.width = '25%';
        main.style.width = '75%';
        sideBlocks.forEach(block => {
            block.style.height = '50px';
        });
        isClicked = false;
    }
    else{
        sideBar.style.width = '5%';
        main.style.width = '95%';
        sideBlocks.forEach(block => {
            block.style.height = '20px';
        });
        isClicked = true;
    }
}

sideBarIcon.addEventListener('click', handleAction);