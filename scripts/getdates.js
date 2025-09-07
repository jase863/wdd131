const date = new Date();

document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;