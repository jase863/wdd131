const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});
