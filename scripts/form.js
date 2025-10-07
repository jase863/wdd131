// Footer Content
const date = new Date();

document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// Visit Counter
const visitsCounter = document.querySelector(".visits");

let visits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (visits !== 0) {
	visitsCounter.textContent = `Number of visits: ${visits}`;
} else {
	visitsCounter.textContent = `This is your first visit.`;
}

visits++;

localStorage.setItem("numVisits-ls", visits);


// Adding products to dropdown
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function CreateOption(products) {
    const productSelection = document.getElementById("product-selection");
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;

        productSelection.appendChild(option);
    });
}

CreateOption(products);