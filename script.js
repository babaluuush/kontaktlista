document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("phoneInput");
    const createContactBtn = document.getElementById("createContactBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn");
    const contactList = document.getElementById("contactList");
    const errorMessage = document.getElementById("errorMessage");

    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
    });

    function createContact() {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!name || !phone) {
            showError("Både namn och telefonnummer måste fyllas i.");
            return;
        }

        const contactItem = document.createElement("div");
        contactItem.classList.add("contact-item");

        const contactFields = document.createElement("div");
        contactFields.classList.add("contact-fields");

        const nameField = document.createElement("input");
        nameField.type = "text";
        nameField.value = name;
        nameField.classList.add("name-input");
        nameField.disabled = true;

        const phoneField = document.createElement("input");
        phoneField.type = "text";
        phoneField.value = phone;
        phoneField.classList.add("phone-input");
        phoneField.disabled = true;

        contactFields.appendChild(nameField);
        contactFields.appendChild(phoneField);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const editBtn = document.createElement("button");
        editBtn.textContent = "Ändra";
        editBtn.addEventListener("click", () => toggleEdit(contactItem, nameField, phoneField, editBtn));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Radera";
        deleteBtn.addEventListener("click", () => contactItem.remove());

        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);

        contactItem.appendChild(contactFields);
        contactItem.appendChild(buttonContainer);
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

    function toggleEdit(contactItem, nameField, phoneField, editBtn) {
        if (nameField.disabled) {
            nameField.disabled = false;
            phoneField.disabled = false;
            editBtn.textContent = "Spara";
        } else {
            const updatedName = nameField.value.trim();
            const updatedPhone = phoneField.value.trim();
            if (!updatedName || !updatedPhone) {
                showError("Kontaktuppgifter får ej vara tomma.");
                return;
            }
            nameField.disabled = true;
            phoneField.disabled = true;
            editBtn.textContent = "Ändra";
            errorMessage.style.display = "none";
        }
    }

    function deleteAllContacts() {
        contactList.innerHTML = "";
    }

    createContactBtn.addEventListener("click", createContact);
    deleteAllBtn.addEventListener("click", deleteAllContacts);
});
