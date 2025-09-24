const date = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

let temp = document.querySelector(".temp");
let conditions = document.querySelector(".conditions");
let wind = document.querySelector(".wind");
let chill = document.querySelector(".chill");
let windSpeed = 16;
let temperature = 5;

temp.textContent = `Temperature: ${temperature} °C`;
conditions.textContent = "Conditions: Partly Cloudy";
wind.textContent = `Wind: ${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    chill.textContent = `Wind Chill: ${calculateWindChill(windSpeed, temperature)} °C`;
}

else {
    chill.textContent = "N/A";
}

function calculateWindChill(windSpeed, temperature){
    let windchill = 13.12 + (.6215*temperature)-(11.37*(Math.pow(windSpeed,.16)))+(.3965*temperature*(Math.pow(windSpeed,.16)));

    windchill = Math.round(windchill * 10) / 10;
    return windchill;
}
