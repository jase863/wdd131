const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

document.querySelector('.benefits-msg').textContent = `Check out the benefits below that only subscribers enjoy. 
Use the form if you would like to subscribe, and remember to enter your discount code!`;


let benefits = [`Chat with 3D printing experts`, `Links to material sales from our favorite sites`, `Access to our community of makers`, `Giveaways`];

function AddBenefits(benefits){
    benefits.forEach(benefit => {
        const description = document.querySelector('.sub-description');
        const listedBenefit = document.createElement('li');
        listedBenefit.className = 'listed-benefit';

        listedBenefit.textContent = benefit;

        description.appendChild(listedBenefit);
    });
}

AddBenefits(benefits);

let subPrice = 49.99
const codeButton = document.querySelector('.code-button');
const subscription = document.querySelector('.sub-price');
subscription.innerText = `Subscription Price: $${subPrice.toFixed(2)}`;

codeButton.addEventListener('click', ()=> {
    let code = document.querySelector('.discount-code').value.trim().toUpperCase();

    let discountedPrice = parseFloat(CalcSubPrice(code, subPrice));

    if (discountedPrice < subPrice) {
        subscription.innerText = `Subscription Price: $${discountedPrice.toFixed(2)}`;
        subscription.style.color = 'green';
    } else {
        subscription.innerHTML = `That code is invalid.<br>Your subscription price is $${subPrice}.`;
        subscription.style.color = 'red';
    }
});



function CalcSubPrice(code, subPrice) {
    if (code === 'FRST220') {
        return subPrice * 0.8;
    } else if (code === 'SCND210') {
        return subPrice * 0.9;
    } else {
        return subPrice;
    }
}
// FRST220
// SCND210