import {getPhotographers} from "../utils/getData.js";

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

function init() {
    // Récupère les datas des photographes   
   getPhotographers()
    .then(displayData);
};

init();

