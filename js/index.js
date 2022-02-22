//메뉴 이벤트
let mainNav = document.querySelector('.main-nav');
let subNav = document.querySelector('.sub-nav');

function displayMenu(){
    subNav.classList.toggle('active')
}
mainNav.addEventListener('mouseover',displayMenu);
mainNav.addEventListener('mouseout',displayMenu);
subNav.addEventListener('mouseover',displayMenu);
subNav.addEventListener('mouseout',displayMenu);


//슬라이더
let slides = document.querySelector('.slides');
let slideImg = document.querySelectorAll('.slide');
let currentIdx = 0; //현재 슬라이드 index
let slideCount = slideImg.length; // 슬라이드 개수
let slideWidth = 1200; //한개의 슬라이드 넓이

// const prev = document.querySelector('.prev');//이전 버튼
// const next = document.querySelector('.next'); //다음 버튼
// function moveSlide(num) { slides.style.left = -num * 1200 + 'px'; currentIdx = num; }
// prev.addEventListener('click', function () {
//     if (currentIdx !== 0) {
//         moveSlide(currentIdx - 1)
//     }
// });
//     next.addEventListener('click', function () {
//     if (currentIdx !== slideCount - 1) {
//         moveSlide(currentIdx + 1);
//     }
// });

slides.style.width = slideWidth * slideCount + 'px';
showSlides();
function showSlides() {
    for(var i=0;i<slideImg.length;i++){
        slides.style.left = -(slideWidth * currentIdx) + 'px';
    }
    currentIdx++;
    if (currentIdx === slideCount) {
        currentIdx = 0;
    }
    setTimeout(showSlides, 2000); 
};



//모달팝업
let openBtn1 = document.querySelector(".open1");
let openBtn2 = document.querySelector(".open2");
let openBtn3 = document.querySelector(".open3");
let openBtn4 = document.querySelector(".open4");
let modal = document.querySelector(".modal");
let closeBtn = modal.querySelector("button");
let modalBg = modal.querySelector(".modal-bg");

function displayModal(){
    modal.classList.toggle("hidden")
};
openBtn1.addEventListener("click",displayModal);
openBtn2.addEventListener("click",displayModal);
openBtn3.addEventListener("click",displayModal);
openBtn4.addEventListener("click",displayModal);
closeBtn.addEventListener("click",displayModal);
modalBg.addEventListener("click",displayModal);
