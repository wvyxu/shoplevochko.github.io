let mainPhoto = document.querySelector('.main-card-photo');
let btn1 = document.querySelectorAll('.card-photo-elem'); //кнопка для открытия фото


for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener("click", function () {
        if (btn1[i].className = `photo${i + 1}`) {
            let photoElem = `.photo${i + 1} > img`; //строка с селектором для картинки
            mainPhoto.src = document.querySelector(photoElem).src;
            document.querySelector(`.photo${i + 1}`).classList = `card-photo-elem photo${i+1}`; //возвращаем классы кнопкам
        }
    });
}

let plus = document.querySelectorAll(".plus-quantity");
let minus = document.querySelectorAll(".minus-quantity");
let quantity = document.querySelectorAll("#quantity");

for (let i = 0; i <= plus.length; i++) {
	for (let j = 0; j <= quantity.length; j++) {
		plus[i].addEventListener("click", function() {
			if (i == j) {
				quantity[j].value++;
			}
		});
	}
}
