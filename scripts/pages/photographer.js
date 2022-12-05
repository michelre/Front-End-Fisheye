import {getPhotographers} from "../utils/getData.js";

//Get user id from URL
const urlSearchParams = new URLSearchParams(document.location.search);
const userId = urlSearchParams.get("id");


// async function displayHeaderData(photographers) {
//     const photographHeader = document.querySelector(".photograph-header");

//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// };

// async function init() {
//     // Récupère les datas des photographes   
//     const { photographers } = await getPhotographers();
//     displayData(photographers);
// };

// init();