import { TotalLikesAddOne, TotalLikesRemoveOne, totalLikes, updateTotalLikesDisplay } from "../pages/photographer.js"


function mediaFactory(data) {
    let { id, photographerId, title, image, video, likes, date, price } = data;

    const galleryImage = `./assets/photos/${photographerId}/${image}`;
    const galleryVideo = `./assets/photos/${photographerId}/${video}`;

    let mediaLiked = false;

    //Creates gallery & lightbox
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
        function addRemoveLike() {

            if (!mediaLiked) {
                mediaLiked = true;
                likes = likes + 1;
                mediaLikes.textContent = likes;
                TotalLikesAddOne();
                updateTotalLikesDisplay(document.querySelector(".total-likes"));

            } else if (mediaLiked) {
                mediaLiked = false;
                likes = likes - 1;
                mediaLikes.textContent = likes;
                TotalLikesRemoveOne();
                updateTotalLikesDisplay(document.querySelector(".total-likes"));
            }
        }

        const mediaLikesIcon = document.createElement('i');
        mediaLikesIcon.classList.add("fa-solid", "fa-heart", "fa-xl", "media-likes-icon");

        //Like Icon click event
        mediaLikesIcon.addEventListener("click", addRemoveLike);

        article.appendChild(mediaContainer);

        //Create lightbox slide div
        const lighboxSlides = document.querySelector(".lightbox-slides");
        const lightboxSlide = document.createElement("div");
        lightboxSlide.classList.add("lightbox-slide");
        lightboxSlide.classList.add(id);

        //Create lightbox slide title
        const lightboxTitleContainer = document.querySelector(".lightbox-media-title-container");
        const lightboxMediaTitle = document.createElement("p");
        lightboxMediaTitle.classList.add("lightbox-media-title");

        //Check if media is image or video and add to DOM
        if (image) {
            const img = document.createElement('img');
            img.setAttribute("src", galleryImage);
            img.setAttribute("data",id);
            //add Image to gallery
            mediaContainer.appendChild(img);
            //add image to lightbox
            lighboxSlides.appendChild(lightboxSlide);
            lightboxSlide.appendChild(img.cloneNode(true));
            //add image title
            lightboxMediaTitle.textContent = title;
            lightboxTitleContainer.appendChild(lightboxMediaTitle);
        } else if (video) {
            const vid = document.createElement('video');
            vid.setAttribute("src", galleryVideo);
            vid.setAttribute("controls", "controls");
            vid.setAttribute("data",id);
            //add video to gallery
            mediaContainer.appendChild(vid);
            //add video to lightbox
            lighboxSlides.appendChild(lightboxSlide);
            lightboxSlide.appendChild(vid.cloneNode(true));
            //add video title
            lightboxMediaTitle.textContent = title;
            lightboxTitleContainer.appendChild(lightboxMediaTitle);
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




export { mediaFactory };
