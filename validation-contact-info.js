function validate() {
    let firstName = document.getElementById('name');
    let lastName = document.getElementById('surname');
    let pat = document.getElementById('patronymic');
    let phone = document.getElementById('tel');
    let adress = document.getElementById('adress');
    let rules = document.getElementById("rules");
  
    let firstNameError = document.querySelector('.nameError');
    let lastNameError = document.querySelector('.surnameError');
    let patronymicError = document.querySelector('.patronymicError');
    let phoneError = document.querySelector('.phoneError');
    let adressError = document.querySelector('.adressError');
    
    let isValid = true;

    if (!/^[А-Яа-яЁё\s]+$/.test(firstName.value)) {
        firstName.style.borderColor = "red";
        firstNameError.textContent = "Поле должно содержать только кириллицу";
        isValid = false;
    } else {
        firstName.style.borderColor = "";
        firstNameError.textContent = "";
    }
  

    if (!/^[А-Яа-яЁё\s]+$/.test(lastName.value)) {
        lastName.style.borderColor = "red";
        lastNameError.textContent = "Поле должно содержать только кириллицу";
        isValid = false;
    } else {
        lastName.style.borderColor = "";
        lastNameError.textContent = "";
    }

    if (!/^[А-Яа-яЁё\s]+$/.test(pat.value) && pat.value != "") {
        pat.style.borderColor = "red";
        patronymicError.textContent = "Поле должно содержать только кириллицу";
        isValid = false;
    } else {
        pat.style.borderColor = "";
        patronymicError.textContent = "";
    }

    if (adress.value.length < 10 && adress.value != "") {
        adress.style.borderColor = "red";
        adressError.textContent = "Поле должно иметь не более 10 символов";
        isValid = false;
    } else {
        adress.style.borderColor = "";
        adressError.textContent = "";
    }

    if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone.value)) {
        phone.style.borderColor = "red";
        phoneError.textContent = "Введите корректный номер телефона";
        isValid = false;
    } else {
        phone.style.borderColor = "";
        phoneError.textContent = "";
    }

    if (!rules.checked) {
        document.querySelector(".row-checkbox > label").style.color = "red";
        isValid = false;
    } else {
        document.querySelector(".row-checkbox > label").style.color = "#fff";
    }
    
    return isValid; 
}

let btnIsValid = document.querySelector(".next");
btnIsValid.addEventListener("click", function() {
    let valid = validate();
    if (valid) {
        window.location.href = `index.html`;
    }
});