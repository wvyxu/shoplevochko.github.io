
let elems = document.querySelectorAll(".catalog-elem");
let dark = document.querySelector(".dark_layer");


//находим элементы модалки
let imgM = document.querySelectorAll(".img-modal");
let nameM = document.querySelectorAll(".modal-dish-name");
let priceM = document.querySelectorAll(".modal-dish-price");
let weightM = document.querySelectorAll(".modal-dish-weight");
let infoM = document.querySelectorAll(".modal-dish-info");
//находим информацию в модалку
let imgElem = document.querySelectorAll(".elem-pic");
let nameElem = document.querySelectorAll(".catalog-elem-mainInfo>h2");
let priceElem = document.querySelectorAll(".price");
let weightElem = document.querySelectorAll(".catalog-elem-mainInfo>p");
let infoElem = document.querySelectorAll(".about-dish");

elems.forEach(elem => {
    elem.addEventListener('click', event => {
        let i = Array.from(elems).indexOf(event.currentTarget);
        nameM[0].innerHTML= nameElem[i].innerHTML;
        infoM[0].innerHTML= infoElem[i].innerHTML;
        imgM[0].src= imgElem[i].src;
        priceM[0].innerHTML = priceElem[i].innerHTML;
        weightM[0].innerHTML = weightElem[i].innerHTML;
    })
});

elems.forEach(elem => {
    elem.addEventListener("click", function (){
        dark.classList.toggle("hidden");
        
    });
    
});

function closeModal() { //крестик на модальном окне
    dark.classList.toggle("hidden");
}




