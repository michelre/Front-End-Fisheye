function mediaFactory(data) {
    let { id, photographerId, title, image, video, likes, date, price } = data;

    const galleryImage = `./assets/photos/${photographerId}/${image}`;
    const galleryVideo = `./assets/photos/${photographerId}/${video}`;

    let mediaLiked = false;

    //Creates Gallery
    function getUserMediaDOM() {

        const article = document.createElement('article');

        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add("media-container");

        const mediaBody = document.createElement('div');
        mediaBody.classList.add("media-body");

        const mediaTitle = document.createElement('p');
        mediaTitle.classList.add("media-title");
        mediaTitle.textContent = title;

        const mediaLikesContainer = document.createElement('div');
        mediaLikesContainer.classList.add("media-likes-container");

        const mediaLikes = document.createElement('p')
        mediaLikes.classList.add("media-likes");
        mediaLikes.textContent = likes;

        //Media Like count
        function addRemoveLike () {
            
            if (!mediaLiked) {
                mediaLiked = true;
                likes = likes + 1;
                mediaLikes.textContent = likes;            
            } else if (mediaLiked) {
                mediaLiked = false;
                likes = likes - 1;
                mediaLikes.textContent = likes;        
            }
        }  

        const mediaLikesIcon = document.createElement('i');
        mediaLikesIcon.classList.add("fa-solid", "fa-heart", "fa-xl", "media-likes-icon");

        //Like Icon click event
        mediaLikesIcon.addEventListener("click", addRemoveLike);

        article.appendChild(mediaContainer);

        if (image) {
            const img = document.createElement('img');
            img.setAttribute("src", galleryImage);
            mediaContainer.appendChild(img);
        } else if (video) {
            const vid = document.createElement('video');
            vid.setAttribute("src", galleryVideo);
            vid.setAttribute("controls", "controls");
            mediaContainer.appendChild(vid);
        }

        article.appendChild(mediaBody);
        mediaBody.appendChild(mediaTitle);
        mediaBody.appendChild(mediaLikesContainer);
        mediaLikesContainer.appendChild(mediaLikes);
        mediaLikesContainer.appendChild(mediaLikesIcon);     
        return (article);
    }
    


    return { galleryImage, galleryVideo, title, likes, getUserMediaDOM }


}
