// Footer Content
const date = new Date();

document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

document.querySelectorAll("label, p").forEach(fieldTitle => {
    if (fieldTitle.textContent.includes("*")) {
        fieldTitle.style.color = "red";
    }
});

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