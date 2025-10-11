const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

//  Number of visits for discount
const banner = document.querySelector('.banner');
const bannerText = document.querySelector('.banner-text');
const bannerClose = document.querySelector('.banner-close');

let visits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let subPrice = 49.99;

if (visits < 1) {
    banner.style.display = 'block';
	bannerText.textContent = `Welcome! Since this is your first visit to our site, 
    enjoy a 20% discount off of the normal price of $${subPrice}! Total price for a lifetime subscription is only $${CalcSubPrice(visits, subPrice)}. 
    Enter "FRST220" on the join page to get your discount.`;
} 
else if (visits < 5) {
	banner.style.display = 'block';
	bannerText.textContent = `Welcome back! You missed your shot for a 20% discount, but you
    still qualify for a 10% discount off of the normal price of $${subPrice}! Total price for a lifetime subscription is only $${CalcSubPrice(visits, subPrice)}.
    Enter "SCND210" on the join page to get your discount.`;
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

function CalcSubPrice(visits, subPrice) {
    if (visits < 1) {
        subPrice -= (subPrice *.2);
    }
    else if (visits >= 1 ) {
        subPrice -= (subPrice *.1);
    }
    return subPrice.toFixed(2);
}

// content

const welcomeMSG = document.querySelector('.welcome');
const fdmContent = document.querySelector('.fdm-description');
const slaContent = document.querySelector('.sla-description');

welcomeMSG.innerHTML = `Welcome to 3D Printing Guru! We are passionate about all things 3D 
printing, and we hope to be able to share some of the wisdom that we've gained 
over the years.<br><br>Be sure to check out our materials page to learn about some of our
favorites. If you like our content, sign up on our join page to get access to all that our
site has to offer.`

fdmContent.innerHTML = `Fused Deposition Modeling (FDM) is the most common type of 3D printing. 
                It works by heating plastic filament and pushing it through a nozzle. 
                Just like CNC machines, 3D printers use G-Code to move in a predetermined
                path, depositing the plastic layer by layer to form a solid object<br>
                <br>
                FDM printing is fairly easy to learn, and the materials are typically cheaper 
                than other printing options. This makes it a great choice for prototyping. 
                The materials are also relatively strong compared to other methods of 3D 
                printing. However, there are downsides to using FDM printers. For instance, 
                they are a lot slower than other methods, and their surface finishes don't 
                look quite as nice.`;

slaContent.innerHTML = `Resin printers use a technology called Stereolithography (SLA) to cure 
                photosensitive resin stored in a vat below the build plate. Using a 
                laser or LCD screen, the printer presses the build plate against the 
                bottom of the vat and displays UV light in predetermined patterns for 
                each layer. Just like FDM printers, SLA printers build models layer by 
                layer. Unlike FDM printers, these printers print an entire layer at once, 
                which means that the print time for multiple models will be the same as 
                one model.<br>
                <br>
                The learning curve for SLA printers is a little steeper than FDM printers
                in a lot of ways. Resin is also a bit more expensive than filament. Because
                SLA printers use small lights to cure the resin, the finish is very smooth 
                and detailed, making SLA printers the choice for miniature figurines and 
                models that need great detail. One of the downsides of using SLA printers is 
                that the resin is very toxic and has to be handled with gloves until it is
                fully cured. In order to fully cure SLA models, they must be cleaned with 95%
                isopropyl alcohol and then put under a UV light.`;

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
    if (window.innerWidth < 480) {
        fdmButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    else{
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

slaButton.addEventListener('click', ()=>{
    slaButton.classList.toggle('open');
     if (window.innerWidth < 480) {
        slaButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    else{
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

