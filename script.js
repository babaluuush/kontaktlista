// scprit.js

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("phoneInput");
    const createContactbtn = document.getElementById("createContactBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn");
    const contactList = document.getElementById("contactList");
    const errorMessage = document.getElementById("errorMessage");

    function createContact() {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!name || !phone) {
            showError("Namn och telefonnummer måste fyllas i");
            return;
        }

        const contactItem = document.createElement("div");
        contactItem.classList.add("contact-item");

        const nameField = document.createElement("input");
        nameField.type = "text";
        nameField.value = name;
        nameField.disabled = true;

        const phoneField = document.createElement("input");
        phoneField.type = "text";
        phoneField.value = name;
        phoneField.disabled = true;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Ändra";
        editBtn.addEventListener("click", () => toggleEdit(contactItem, nameField, phoneField, editBtn));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Radera"
        deleteBtn.addEventListener("click", () => contactItem.remove());

        contactItem.appendChild(nameField);
        contactItem.appendChild(phoneField);
        contactItem.appendChild(editBtn);
        contactItem.appendChild(deleteBtn);

        contactList.appendChild(contactItem);
        clearInputs();
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    function clearInputs() {
        nameInput.value = "";
        phoneInput.value = "";
        errorMessage.style.display = "none";
    }

    
})