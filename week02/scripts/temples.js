const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

const main = document.querySelector('main');
const largerBody = document.querySelector('body');

const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});


