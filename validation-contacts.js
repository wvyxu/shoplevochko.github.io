function validate() {
    let phone = document.getElementById("tel");
    let adress = document.querySelector("#adress");
    let rules = document.getElementById("rules");
  
    let phoneError = document.querySelector('.phoneError');
    let adressError = document.querySelector('.adressError');

    if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone.value)) {
        phone.style.borderColor = "red";
        phoneError.textContent = "Введите корректный номер телефона";
    } else {
        phone.style.borderColor = "";
    }

    if (adress.value.length < 8) {
        adress.style.borderColor = "red";
        adressError.textContent = "Короткий адрес, уточните";
    } else  {
        adress.style.borderColor = "";
        adressError.textContent = "";
    }

    if (!rules.checked) {
        document.querySelector(".row-checkbox > label").style.color = "red";
    } else {
        document.querySelector(".row-checkbox > label").style.color = "#fff";
    }
}

let btnIsValid = document.querySelector(".next");
btnIsValid.addEventListener("click", validate);