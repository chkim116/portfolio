'use strict'

// 넷바 스크롤 고정

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', navbarScroll);

function navbarScroll() {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {navbar.classList.remove('navbar--dark');
    }
}


// 넷바 메뉴 버튼 누르면 메뉴로 드롭다운
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth', block:'center'});
    navbarMenu.classList.remove('open');
});

// 넷바 토글 열면 메뉴 열리기
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', function() {
    navbarMenu.classList.toggle('open');
})

// 컨택트 버튼 누르면 컨택트로 드롭다운
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// 홈 페이드 아웃 시키기
const home = document.querySelector('.homecontainar');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1- window.scrollY / homeHeight;
});


// arrow-up
const arrowUp = document.querySelector(".arrow-up")
document.addEventListener('scroll', function() {
    if (window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});



// selector
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth', blcok:'center'});

}