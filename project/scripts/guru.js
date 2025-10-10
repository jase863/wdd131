const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

//  Number of visits for discount
const banner = document.querySelector('.banner');
const bannerClose = document.querySelector('.banner-close');

let visits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let subPrice = 49.99;

if (visits < 1) {
    banner.style.display = 'block';
	banner.textContent = `Welcome! Since this is your first visit to our site, 
    enjoy a 20% discount! Total price for a lifetime subscription is only $${(subPrice - (subPrice * .2)).toFixed(2)}. 
    Enter "FRST220" on the join page to get your discount.`;
} 
else if (visits < 5) {
	banner.style.display = 'block';
	banner.textContent = `Welcome back! You missed your shot for a 20% discount, but you
    still qualify for a 10% discount! Total price for a lifetime subscription is only $${(subPrice - (subPrice * .1)).toFixed(2)}.
    Enter "SECND210" on the join page to get your discount.`;
}
else {
    banner.style.display = 'none';
    bannerClose.style.display = 'none';
} 

bannerClose.addEventListener('click', ()=>{
    bannerClose.style.display = "none";
    banner.style.display = 'none';
});

visits++;

localStorage.setItem("numVisits-ls", visits);

// buttons

const fdmButton = document.querySelector('.fdm-div');
const slaButton = document.querySelector('.sla-div');

const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

fdmButton.addEventListener('click', ()=>{
    fdmButton.classList.toggle('open');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

slaButton.addEventListener('click', ()=>{
    slaButton.classList.toggle('open');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

