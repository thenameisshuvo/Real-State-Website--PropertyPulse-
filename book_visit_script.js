const nameInput = document.getElementById('nameInput');
const addressInput = document.getElementById('addressInput');
const professionInput = document.getElementById('professionInput');
const dateInput = document.getElementById('dateInput');
const timeInput = document.getElementById('timeInput');

const nameError = document.getElementById('nameError');
const addressError = document.getElementById('addressError');
const professionError = document.getElementById('professionError');
const dateError = document.getElementById('dateError');
const timeError = document.getElementById('timeError');

function nameValidate() {
    if (nameInput.value.trim() === "") {
        nameError.innerText = "*Please enter name";
    } else if (!isNaN(nameInput.value) || nameInput.value.length < 3) {
        nameError.innerText = "*Please enter a valid name";
    } else {
        nameError.innerText = "";
    }
}

function addressValidate() {
    if (addressInput.value.trim() === "") {
        addressError.innerText = "*Please enter address";
    } else if (addressInput.value.length < 10 || !isNaN(addressInput.value)) {
        addressError.innerText = "*Please enter a valid address";
    } else {
        addressError.innerText = "";
    }
}

function professionValidate() {
    if (professionInput.value.trim() === "") {
        professionError.innerText = "*Please enter profession";
    } else if (!isNaN(professionInput.value)) {
        professionError.innerText = "*Numbers not allowed";
    } else if (professionInput.value.length < 6) {
        professionError.innerText = "*Please enter a valid profession";
    } else {
        professionError.innerText = "";
    }
}

function dateValidate() {
    if (dateInput.value.trim() === "") {
        dateError.innerText = "*Please enter date";
    } else {
        dateError.innerText = "";
    }
}

function timeValidate() {
    const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 24-hour format
    if (timeInput.value.trim() === "") {
        timeError.innerText = "*Please enter time";
    } else if (!timeInput.value.match(timePattern)) {
        timeError.innerText = "*Please enter a valid time";
    } else {
        timeError.innerText = "";
    }
}

function validateInfo() {
    nameValidate();
    addressValidate();
    professionValidate();
    dateValidate();
    timeValidate();

    if (nameError.innerText === "" &&
        addressError.innerText === "" &&
        professionError.innerText === "" &&
        dateError.innerText === "" &&
        timeError.innerText === "") {
        alert("Visit booked!");
        nameInput.value = "";
        addressInput.value = "";
        professionInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    }
}

// Attach validation functions to respective input events
nameInput.addEventListener('blur', nameValidate);
addressInput.addEventListener('blur', addressValidate);
professionInput.addEventListener('blur', professionValidate);
dateInput.addEventListener('change', dateValidate);
timeInput.addEventListener('change', timeValidate);
