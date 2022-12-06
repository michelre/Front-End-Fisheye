import { getPhotographers, getMedias } from "../utils/getData.js";

//Get user id from URL
const urlSearchParams = new URLSearchParams(document.location.search);
const userId = urlSearchParams.get("id");

//Get user data, return photographer object
async function getUserData() {
    const { photographers } = await getPhotographers();
    const photographer = photographers.find((obj) => {
        return obj.id == userId;
    });
    return photographer;
}

// display user page data
async function displayUserPageData() {
    const photograph = await getUserData();
    const { name, portrait, city, country, tagline, price, id } = photograph;

    const picture = `./assets/photographers/${portrait}`;

    const photographHeader = document.querySelector(".photograph-header");

    const headerCardBody = document.createElement('div');
    headerCardBody.classList.add("header-card-body");

    const h1 = document.createElement('h1');
    h1.textContent = name;

    const location = document.createElement('p');
    location.textContent = `${city}, ${country}`;
    location.classList.add("location");

    const taglineParagraph = document.createElement('p');
    taglineParagraph.textContent = tagline;
    taglineParagraph.classList.add("tagline");

    const img = document.createElement('img');
    img.setAttribute("src", picture);

    const dailyRate = document.createElement('p');
    dailyRate.textContent = `${price}€/jour`;
    dailyRate.classList.add("bottom-tab-dailyrate");

    //Header Card
    photographHeader.prepend(headerCardBody);
    headerCardBody.appendChild(h1);
    headerCardBody.appendChild(location);
    headerCardBody.appendChild(taglineParagraph);
    photographHeader.appendChild(img);

    //Bottom tab
    const bottomTab = document.getElementById("bottom-tab");
    console.log(bottomTab[0]);
    bottomTab.appendChild(dailyRate);
    console.log(bottomTab);
}

displayUserPageData();


//Display gallery Data

async function displayGalleryData(medias) {

    const gallery = document.getElementById('gallery');

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaGalleryDOM = mediaModel.getUserMediaDOM();
        gallery.appendChild(mediaGalleryDOM);
    });
};

async function initMedia() {
    const { medias } = await getMedias();

    //Create new array containing user medias
    const userMedia = medias.filter(media => media.photographerId == userId)
    displayGalleryData(userMedia);
};

initMedia();

