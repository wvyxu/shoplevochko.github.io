function validate() {
    let name = document.querySelector("#name");
    let phone = document.getElementById("phone");
    let rules = document.getElementById("rules");
  
    let phoneError = document.querySelector('.phoneError');
    let nameError = document.querySelector('.nameError');

    if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone.value)) {
        phone.style.borderColor = "red";
        phoneError.textContent = "Введите корректный номер телефона";
    } else {
        phone.style.borderColor = "";
    }

    if (name.value.length < 2) {
        name.style.borderColor = "red";
        nameError.textContent = "Имя должно содержать не менее 2 символов";
    } else  {
        name.style.borderColor = "";
        nameError.textContent = "";
    }

    if (!/[а-яА-ЯЁё]/.test(name.value)) {
        name.style.borderColor = "red";
        nameError.textContent = "Имя должно содержать только кириллицу";
    }
    else  {
        name.style.borderColor = "";
        nameError.textContent = "";
    }

    if (!rules.checked) {
        document.querySelector(".form-elem-row > div > label").style.color = "red";
    } else {
        document.querySelector(".form-elem-row > div > label").style.color = "#fff";
    }
}

let btnIsValid = document.querySelector(".feedback-send");
btnIsValid.addEventListener("click", validate);