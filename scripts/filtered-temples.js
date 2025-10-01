const menuButton = document.querySelector('#menu-button');
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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Preston England",
    location: "Chorley, England",
    dedicated: "1998, June, 10",
    area: 69630,
    imageUrl: "images/preston_temple.webp"
  },
  {
    templeName: "Ogden Utah",
    location: "Ogden, Utah, United States",
    dedicated: "2014, September, 6",
    area: 112232,
    imageUrl: "images/ogden_utah_temple.webp"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1992, October, 25",
    area: 35546,
    imageUrl: "images/bern_switzerland_temple_lds.webp"
  }
];



function CreateTempleCard(temples){

    main.innerHTML = '';

    temples.forEach(temple => {
      
        const mainElement = document.querySelector("main");
        const templeContainer = document.createElement('div')
        templeContainer.className = "temple-card";

        const name = document.createElement('h2');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedication = document.createElement('p');
        dedication.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement('p');
        area.textContent = `Size: ${temple.area} sq ft`;

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} temple`;
        image.loading = "lazy";
        image.width = 400;

        templeContainer.appendChild(name);
        templeContainer.appendChild(location);
        templeContainer.appendChild(dedication);
        templeContainer.appendChild(area);
        templeContainer.appendChild(image);

        mainElement.appendChild(templeContainer); 
    });

};

CreateTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", ()=> {
    CreateTempleCard(temples)
});

oldLink.addEventListener("click", ()=> {
    CreateTempleCard(temples.filter(temple => temple.dedicated.split(',')[0] < 1900));
});

newLink.addEventListener("click", ()=> {
  CreateTempleCard(temples.filter(temple => temple.dedicated.split(',')[0] > 2000));
});

largeLink.addEventListener("click", ()=> {
    
    CreateTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", ()=> {
    CreateTempleCard(temples.filter(temple => temple.area < 10000))
});