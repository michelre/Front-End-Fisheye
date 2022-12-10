const sortButton = document.querySelector(".sort-button-main");
const dropdownList = document.querySelector(".dropdown-sort-list");
const options = document.querySelectorAll(".sort-button");
// const sortByLikes = document.querySelector(".sort-by-likes");
// const sortByDate = document.querySelector(".sort-by-date");
// const sortByTitle = document.querySelector(".sort-by-title");

const sortArrowUp = document.querySelector(".fa-chevron-up");

const sortArrowDown = document.querySelector(".fa-chevron-down");

// const sortOptions = ["Popularité", "Date", "Titre"];

// const sortMedia = (option) => {
//   console.log(option);  
// };

//Show/hide dropdown
function showHidedropDownList () {
  dropdownList.classList.toggle("hidden");
}

//Toggle sort arrow up/down
function toggleSortArrow ()
 {
 if(sortArrowUp.style.opacity == "1"){
  sortArrowUp.style.opacity = "0";
  sortArrowDown.style.opacity = "1";
} else {
  sortArrowUp.style.opacity = "1";
  sortArrowDown.style.opacity = "0";
}
 }

//Show/hide dropdown list on click
sortButton.addEventListener("click", () => {
  showHidedropDownList();
  toggleSortArrow();
});

//Add event listener to dropdown list items
options.forEach((option) => {
  option.addEventListener("click", () => {
    // sortMedia(option.dataset.sort);
    sortButton.innerText = option.innerText;
    toggleSortArrow();
    showHidedropDownList();
  });
});
