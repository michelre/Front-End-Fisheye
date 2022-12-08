//Open/close Modal
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//Log modal user inputs to console
function logUserInput() {
    const firstNameInput = document.getElementById("First-Name").value;
    console.log("Prénom: " + firstNameInput);
    const lastNameInput = document.getElementById("Last-Name").value;
    console.log("Nom: " + lastNameInput);
    const emailInput = document.getElementById("email").value;
    console.log("Email: " + emailInput);
    const messageInput = document.getElementById("Your-message").value;
    console.log("Message: " + messageInput);
}

//Modal submit button calls logUserInput
const modalSubmitButton = document.getElementById("modal-submit-button");
modalSubmitButton.addEventListener("click", function (e){
    e.preventDefault();
    logUserInput();
    closeModal();
});