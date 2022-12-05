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


export {getPhotographers};