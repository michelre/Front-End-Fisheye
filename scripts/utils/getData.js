// Get photographers data from json file as array of objects
function getPhotographers() {

    return fetch("../../data/photographers.json")
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



};

//Get media data from json file as array of objects
function getMedias() {
    return fetch("../../data/photographers.json")
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

}

export {getPhotographers, getMedias};