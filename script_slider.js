let mas=[
    {'alt':"скидка на первый заказ",
    'src':"./img/t-shirts.jpg"},
    {'alt':"кэшбэк",
    'src':"https://cdn.foodpicasso.com/assets/2023/07/12/382eae5ec1f1359ae2d37c43b370c445---jpeg_1800x680_2bfca_convert.webp"},
    {'alt':"кэшбэк",
    'src':"https://cdn.foodpicasso.com/assets/2023/07/12/382eae5ec1f1359ae2d37c43b370c445---jpeg_1800x680_2bfca_convert.webp"},
];

let imgSlider=document.body.querySelector('.img');
let slide = document.createElement("img");
slide.classList.add("pic");
slide.setAttribute ("src", mas[0].src);
imgSlider.appendChild(slide);

let counter = document.body.querySelector('.slider-counter');


setInterval(slideImage, 10000);

let mark1 = document.querySelector('.mark1');
let mark2 = document.querySelector('.mark2');

function slideImage(){
    let nextNum = Number(imgSlider.dataset.num)+1;

    if (nextNum > mas.length-1){
        nextNum=0;
    }
    imgSlider.dataset.num = nextNum;
    slide.setAttribute ("src", mas[nextNum].src);
    countSlide();
}

function slideImageBack(){
    let prevNum = Number(imgSlider.dataset.num)-1;

    if (prevNum < 0){
        prevNum = mas.length-1;
    }
    imgSlider.dataset.num = prevNum;
    slide.setAttribute ("src", mas[prevNum].src);
    countSlide();
    
}

function countSlide(){
    counter.innerHTML = `${Number(imgSlider.dataset.num)+1}/${mas.length}`;
}