const content = document.getElementById('p1');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
let count = 0;
btn1.addEventListener('click', () => {
    count++;
    content.textContent = count;
});
btn2.addEventListener('click', () => {
    count--;
    content.textContent = count;
});
btn3.addEventListener('click', () => {
    count = 0;
    content.textContent = count;
});