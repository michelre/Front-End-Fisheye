// Open the Modal
function openModal() {
    document.querySelector(".lightbox-modal").style.display = "block";
    console.log(document.querySelector(".lightbox-modal"));
  }

  // Close the Modal
  function closeModal() {
    document.querySelector(".lightbox-modal").style.display = "none";
  }
  
  const lighboxButtons = document.querySelectorAll("[data-lightbox-button]");

  lighboxButtons.forEach(lighboxButton => {
    lighboxButton.addEventListener("click",() => {
      const offset = lighboxButton.dataset.lightboxButton === "next" ? 1 : -1;
      const slides = document.querySelector(".lightbox-slides");
      const activeSlide = slides.querySelector("[data-active]");
      let newindex = [...slides.children].indexOf(activeSlide) + offset;
      if (newindex < 0 ) newindex = slides.children.length - 1;
      if (newindex >= slides.children.length ) newindex = 0;

      slides.children[newindex].dataset.active = true;
      delete activeSlide.dataset.active
    })
  })

  