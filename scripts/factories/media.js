function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const galleryImage = `./assets/photos/${photographerId}/${image}`;

    //Creates Gallery
    function getUserMediaDOM() {

        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", galleryImage);

        const vid = document.createElement('video');
        vid.setAttribute("src", galleryImage);
        vid.setAttribute("controls", "controls");

        //Check if media is image or video and add according DOM element
        const isMediaImage = (url) => {
            return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
        }

        if (isMediaImage(galleryImage)) {
            article.appendChild(img);
        }
        else {
            article.appendChild(vid);
        }

        return (article);
    }
   
    return { galleryImage, title, likes, getUserMediaDOM }


}


