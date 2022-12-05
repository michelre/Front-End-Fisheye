// Get photographers data from json file as array of objects
async function getPhotographers() {

    const photographers = await fetch("../../data/photographers.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('Request failed!');
        }, networkError => { console.log(networkError.message) }
        )
        .then((jsonResponse) => {
            return jsonResponse.photographers;
        })
        .catch(error => {
            console.log(error);
        });

    return ({
        photographers: [...photographers]
    })

};

//Get media data from json file as array of objects
async function getMedias() {
    const medias = await fetch("../../data/photographers.json")
    .then(response => {
        if (response.ok) {
            return response.json();
        } throw new Error('Request failed!');
    }, networkError => { console.log(networkError.message) }
    )
    .then((jsonResponse) => {
        return jsonResponse.media;
    })
    .catch(error => {
        console.log(error);
    });

return ({
    medias: [...medias]
})
}

export {getPhotographers, getMedias};