// Open the Modal
function openModal() {
  document.querySelector(".lightbox-modal").style.display = "block";
}

//Click on media gallery opens corresponding media in lightbox
document.addEventListener('click', function (e) {
  const target = e.target;
  if(target.parentNode.parentNode.tagName == "ARTICLE"){
    let mediaId = target.getAttribute("data");
    let mediaToOpen = document.getElementsByClassName(mediaId)[0];
    mediaToOpen.dataset.active = true;
    openModal();
  };   
  
});

// Close the Modal
function closeLightboxModal() {
  document.querySelector(".lightbox-modal").style.display = "none";
  const slides = document.getElementsByClassName("lightbox-slide");
  for (let slide of slides) {
    slide.dataset.active = false;
  }
}

const lightBoxCloseButton = document.querySelector(".lightbox-modal-close");
lightBoxCloseButton.addEventListener("click", closeLightboxModal);

//Add navigation functionality to lightbox buttons
const lighboxButtons = document.querySelectorAll("[data-lightbox-button]");

lighboxButtons.forEach(lighboxButton => {
  lighboxButton.addEventListener("click", () => {
    const offset = lighboxButton.dataset.lightboxButton === "next" ? 1 : -1;
    const slides = document.querySelector(".lightbox-slides");
    const activeSlide = slides.querySelector("[data-active]");
    const slideTitles = document.querySelector(".lightbox-media-title-container");
    const activeSlideTitle = slideTitles.querySelector("[data-active]");

    let newindex = [...slides.children].indexOf(activeSlide) + offset;
    if (newindex < 0) newindex = slides.children.length - 1;
    if (newindex >= slides.children.length) newindex = 0;

    slides.children[newindex].dataset.active = true;
    slideTitles.children[newindex].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activeSlideTitle.dataset.active;
  })
})
