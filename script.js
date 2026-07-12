/*=========================================
AODC Dream Cometrue V3
script.js
=========================================*/

// =============================
// EVENT GALLERY
// =============================

const eventSwiper = new Swiper(".eventSwiper", {

    loop: true,

    speed: 800,

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: 1,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

        pauseOnMouseEnter: false

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev"

    }

});

// =============================
// MUSIC PLAYER
// =============================

const bgMusic = document.getElementById("bgMusic");

let musicStarted = false;

document.addEventListener("click", function () {

    if (!musicStarted) {

        bgMusic.volume = 0.4;

        bgMusic.play();

        musicStarted = true;

    }

});

// =============================
// CURSOR
// =============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// =============================
// HERO ANIMATION
// =============================

const reveal = document.querySelectorAll(".fade-up");

function revealAnimation(){

    reveal.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

revealAnimation();

// =============================
// NAVBAR EFFECT
// =============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.75)";

}else{

header.style.background="rgba(0,0,0,.35)";

}

});
/*=========================================
AODC Dream Cometrue V3
SCRIPT PART 2
=========================================*/

// ==========================
// MUSIC BUTTON
// ==========================

const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';

        } else {

            bgMusic.pause();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i>';

        }

    });

}

// ==========================
// VOLUME
// ==========================

const volumeSlider = document.getElementById("volumeSlider");

if (volumeSlider) {

    volumeSlider.addEventListener("input", function () {

        bgMusic.volume = this.value;

    });

}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// BUTTON HOVER EFFECT
// ==========================

document.querySelectorAll(".heroBtn a").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ==========================
// PARALLAX VIDEO
// ==========================

window.addEventListener("scroll", () => {

    const video = document.getElementById("bgVideo");

    if (video) {

        video.style.transform =
            `translateY(${window.scrollY * 0.25}px)`;

    }

});

// ==========================
// LOADING
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
function openDownloadModal(){

document.getElementById("downloadModal").style.display="block";

}

function closeDownloadModal(){

document.getElementById("downloadModal").style.display="none";

}

window.onclick=function(e){

let modal=document.getElementById("downloadModal");

if(e.target==modal){

modal.style.display="none";

}

}
const music=document.getElementById("bgMusic");
const volume=document.getElementById("volumeSlider");

music.volume=0.5;

volume.addEventListener("input",function(){

    music.volume=this.value/100;

});
const heroTitle = document.getElementById("heroTitle");

document.addEventListener("mousemove", (e) => {

    const rect = heroTitle.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 250) {

        heroTitle.style.transform =
            `translate(${dx * 0.03}px, ${dy * 0.03}px)`;

    } else {

        heroTitle.style.transform = "translate(0,0)";

    }

});
//==============================
// TikTok Popup
//==============================

function openTikTokModal(){

    document.getElementById("tiktokModal").style.display="block";

}

function closeTikTokModal(){

    document.getElementById("tiktokModal").style.display="none";

}

window.addEventListener("click",function(e){

    const modal=document.getElementById("tiktokModal");

    if(e.target===modal){

        modal.style.display="none";

    }

});
//==============================
// YouTube Popup
//==============================

function openYoutubeModal(){

    document.getElementById("youtubeModal").style.display="block";

}

function closeYoutubeModal(){

    document.getElementById("youtubeModal").style.display="none";

}

window.addEventListener("click",function(e){

    const modal=document.getElementById("youtubeModal");

    if(e.target===modal){

        modal.style.display="none";

    }

});