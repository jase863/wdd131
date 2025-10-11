const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

document.querySelector('.info').textContent = `Each material used for 3D printing has unique properties
and challenges. Listed below are some of the most common materials and some information about them.`

const fdmMaterials = [
  {
    material: "PLA",
    property: "User Friendly",
    printingEase: "Easy",
    description: `PLA is the most common filament, and it is very user friendly. 
    Although it isn't as strong as other materials, it gets the job done. 
    Because it's made of cornstarch, PLA is fairly environmentally friendly.`
  },
  {
    material: "ABS",
    property: "Strong",
    printingEase: "Medium",
    description: `ABS is a fairly strong filament, but it can be tricky to print 
    with. It is prone to warp and releases toxic fumes when it is heated. The 
    trick to printing with ABS is to have an enclosure for the printer.`
  },
  {
    material: "TPU",
    property: "Flexible, Heat-Resistant",
    printingEase: "Difficult",
    description: `TPU is flexible and a great choice for impact and heat resistance. 
    It is a difficult material to print, and it is prone to producing strings of 
    material between features. Print TPU slowly with no fan.`
  },
  {
    material: "PETG",
    property: "Strong, Heat-Resistant",
    printingEase: "Medium",
    description: `PETG is stronger than ABS and more difficult to print. However, 
    it excels in heat resistance when compared to many other filaments. It isn't
    very brittle, and it doesn't warp as much as ABS.`
  },
  {
    material: "PVA",
    property: "Dissolvable",
    printingEase: "Easy",
    description: `PVA is a water-soluble filament, which makes it perfect for
    printing removable supports for overhangs on printed parts. It has similar 
    characteristics to PLA, so it is often printed to support PLA.`
  },
  {
    material: "Carbon Fiber Filled",
    property: "Lightweight, Strong",
    printingEase: "Medium",
    description: `Some filaments are infused with carbon fibers to make them light
    and strong. PLA and nylon are common, but others exist. Because of the coarse 
    fibers in the filament, printer nozzles can wear out quickly.`
  }

];

const slaMaterials = [
  {
    material: "Standard",
    property: "Detailed, Affordable",
    printingEase: "Easy",
    description: `Standard resin is the most commonly used resin. It's easy 
    to print with and yields detailed results. Standard resin is brittle when 
    compared to other resins, so post-processing has to be done with care.`
  },
  {
    material: "Water-Washable",
    property: "Easy Cleanup",
    printingEase: "Easy",
    description: `Most resins are cleaned with isopropyl alcohol before curing
    under UV light, but water-washable resin is cleaned with water, so cleanup is 
    safer and easier. It is also less toxic than other resin choices.`
  },
  {
    material: "Flexible",
    property: "Flexible",
    printingEase: "Difficult",
    description: `Flexible resin is a lot like rubber. It's soft, flexible, and impact 
    resistant. Because it's flexible, it can be hard to print with. Flexible resin is 
    great for soft parts that need to flex without breaking.`
  },
  {
    material: "ABS-Like",
    property: "Strong",
    printingEase: "Easy",
    description: `ABS-like resin is similar to ABS filament used by FDM printers. 
    It's stronger than standard resin, so it's useful for things that require 
    strength. It's also relatively flexible, so it's harder to break.`
  },
  {
    material: "Rapid Curing",
    property: "Quick Prints",
    printingEase: "Medium",
    description: `Rapid curing resin has very short cure times. Some brands 
    suggest as few as two seconds per layer. Since it cures so fast, some of 
    the part's detail may be lost. This resin is often used for prototyping.`
  },
  {
    material: "Plant-Based",
    property: "Eco Friendly",
    printingEase: "Easy",
    description: `Plant-based resin is most often made from plant oils, and it's 
    biodegradable. This makes it more eco-friendly than other resins. It's easy to 
    print with, which makes it great for eco-conscious beginners.`
  }
];

function createCards(materials, type) {

    materials.forEach(material => {
        

        const materialContainer = document.querySelector(type);
        const materialCard = document.createElement('div');
        materialCard.className = "material-card";
        
        const materialName = document.createElement('p');
        materialName.textContent = `Material: ${material.material}`;

        const property = document.createElement('p');
        property.textContent = `Properties: ${material.property}`;

        const printingEase = document.createElement('p');
        printingEase.textContent = `Ease of use: ${material.printingEase}`;

        const description = document.createElement('p');
        description.textContent = material.description;

        materialCard.appendChild(materialName);
        materialCard.appendChild(property);
        materialCard.appendChild(printingEase);
        materialCard.appendChild(description);

        materialContainer.appendChild(materialCard)
    });
}

createCards(fdmMaterials, '.filament-cards');
createCards(slaMaterials, '.resin-cards');