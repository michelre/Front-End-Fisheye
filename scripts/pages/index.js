    async function getPhotographers() {

        const photographers = await fetch("../../data/photographers.json").then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('Request failed!');
            }, networkError => {console.log(networkError.message)}
            ).then((jsonResponse) => {
                return jsonResponse.photographers;
            })
              .catch(error => {
                console.log(error);
              });            

        return ({
            photographers: [...photographers]})

    };

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes   
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
init();
