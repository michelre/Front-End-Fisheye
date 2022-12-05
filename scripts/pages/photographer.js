import { getPhotographers } from "../utils/getData.js";

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

// display header user data
async function displayHeaderData() {
    const photograph = await getUserData();
    const { name, portrait, city, country, tagline, price, id } = photograph;

    const picture = `assets/photographers/${portrait}`;

    const photographHeader = document.querySelector(".photograph-header");

    console.log(photograph);

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

    photographHeader.prepend(tagline);
    photographHeader.prepend(location);
    photographHeader.prepend(h1);
    photographHeader.appendChild(img);


}

displayHeaderData();
