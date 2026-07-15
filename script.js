/*==========================================================
AODC V5 ULTIMATE
script.js
Author: MrRex
==========================================================*/

"use strict";


const enterBtn = document.getElementById("enterWorld");
const loadingArea = document.querySelector(".loadingArea");
const loadingBar = document.querySelector(".loadingProgress");
const loadingPercent = document.getElementById("loadingPercent");
const loadingText = document.getElementById("loadingText");
const gmCountdown = document.getElementById("gmCountdown");

enterBtn.addEventListener("click", function () {

    enterBtn.style.display = "none";
    loadingArea.style.display = "block";

    let progress = 0;

    const timer = setInterval(function () {

        progress += 2;

        loadingBar.style.width = progress + "%";
        loadingPercent.innerText = progress + "%";
        loadingText.innerText = "CONNECTING TO ATLANTICA...";

        if (progress >= 100) {

            clearInterval(timer);

            document.getElementById("welcomeScreen").style.opacity = "0";

            setTimeout(function () {

                document.getElementById("welcomeScreen").style.display = "none";

            }, 400);

        }

    }, 30);

});

document.addEventListener("DOMContentLoaded",()=>{

    initClock();

    initPlayer();

    initPing();

    initCountdown();

});


if(enterWorld){

enterWorld.addEventListener("click",startLoading);

}

function startLoading(){

    enterWorld.style.display="none";

    loadingArea.style.display="block";

    if(bgMusic){

        bgMusic.volume=.35;

        bgMusic.play().catch(()=>{});

    }

    let progress=0;

    const timer=setInterval(()=>{

        progress++;

        loadingBar.style.width=progress+"%";

        loadingPercent.innerHTML=progress+"%";

        if(progress<=20){

            loadingText.innerHTML="Connecting Server...";

        }

        else if(progress<=40){

            loadingText.innerHTML="Loading Resources...";

        }

        else if(progress<=60){

            loadingText.innerHTML="Loading Character...";

        }

        else if(progress<=80){

            loadingText.innerHTML="Preparing World...";

        }

        else{

            loadingText.innerHTML="Entering Atlantica...";

        }

        if(progress>=100){

            clearInterval(timer);

            document.getElementById("preloader").classList.add("fadeOut");

            openWebsite();


        }

    },16);

}

function openWebsite(){

    preloader.style.transition=".8s";

    preloader.style.opacity="0";

    preloader.style.pointerEvents="none";

    setTimeout(()=>{

        preloader.style.display="none";

    },900);

}

function initClock(){

if(!clock) return;

updateClock();

setInterval(updateClock,1000);

}

function updateClock(){

const now=new Date();

const h=String(now.getHours()).padStart(2,"0");

const m=String(now.getMinutes()).padStart(2,"0");

const s=String(now.getSeconds()).padStart(2,"0");

clock.innerHTML=`${h}:${m}:${s}`;

}


function initPlayer(){

if(!onlinePlayer) return;

let player=462;

onlinePlayer.innerHTML=player;

setInterval(()=>{

player+=Math.floor(Math.random()*7)-3;

if(player<430){

player=430;

}

if(player>650){

player=650;

}

onlinePlayer.innerHTML=player;

},4000);

}

function initPing(){

if(!serverPing) return;

updatePing();

setInterval(updatePing,2500);

}

function updatePing(){

const ping=Math.floor(Math.random()*15)+18;

serverPing.innerHTML=ping+" ms";

}


function initCountdown(){

if(!gmCountdown) return;

updateCountdown();

setInterval(updateCountdown,1000);

}

function updateCountdown(){

const now=new Date();

const target=new Date();

target.setHours(20,0,0,0);

if(now>target){

target.setDate(target.getDate()+1);

}

const diff=target-now;

const h=Math.floor(diff/1000/60/60);

const m=Math.floor((diff/1000/60)%60);

const s=Math.floor((diff/1000)%60);

gmCountdown.innerHTML=`${h}h ${m}m ${s}s`;

}


"use strict";


const gmButton = document.getElementById("gmButton");
const gmClose = document.getElementById("gmClose");

if(gmButton && gmModal){

    gmButton.addEventListener("click",()=>{

        gmModal.classList.add("active");

    });

}

if(gmClose){

    gmClose.addEventListener("click",()=>{

        gmModal.classList.remove("active");

    });

}

window.addEventListener("click",(e)=>{

    if(e.target===gmModal){

        gmModal.classList.remove("active");

    }

});



const downloadButton=document.getElementById("downloadButton");
const downloadClose=document.getElementById("downloadClose");

if(downloadButton && downloadModal){

    downloadButton.addEventListener("click",()=>{

        downloadModal.classList.add("active");

    });

}

if(downloadClose){

    downloadClose.addEventListener("click",()=>{

        downloadModal.classList.remove("active");

    });

}

const header=document.querySelector("header");

let lastScroll=0;

window.addEventListener("scroll",()=>{

    const current=window.pageYOffset;

    if(current>120){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

    if(current>lastScroll && current>150){

        header.style.transform="translateY(-100%)";

    }else{

        header.style.transform="translateY(0)";

    }

    lastScroll=current;

});


const revealItems=document.querySelectorAll(

".serverCard,.downloadCard,.eventCard,.rankingCard,.newsCard,.communityCard"

);

function revealAnimation(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

revealAnimation();



document.querySelectorAll(".downloadCard").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


document.querySelectorAll(".eventCard").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 0 35px gold";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});


document.querySelectorAll(".newsCard").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


const topButton=document.createElement("button");

topButton.className="topButton";

topButton.innerHTML="▲";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


const musicButton=document.createElement("button");

musicButton.className="musicButton";

musicButton.innerHTML="🎵";

document.body.appendChild(musicButton);

let musicOn=true;

musicButton.addEventListener("click",()=>{

    if(!bgMusic) return;

    if(musicOn){

        bgMusic.pause();

        musicButton.innerHTML="🔇";

    }else{

        bgMusic.play();

        musicButton.innerHTML="🎵";

    }

    musicOn=!musicOn;

});


const videoButton=document.createElement("button");

videoButton.className="videoButton";

videoButton.innerHTML="🎥";

document.body.appendChild(videoButton);

let videoMute=true;

videoButton.addEventListener("click",()=>{

    if(!bgVideo) return;

    videoMute=!videoMute;

    bgVideo.muted=videoMute;

    videoButton.innerHTML=videoMute ? "🎥" : "🔊";

});

function toast(message){

    const notify=document.createElement("div");

    notify.className="toast";

    notify.innerHTML=message;

    document.body.appendChild(notify);

    setTimeout(()=>{

        notify.classList.add("show");

    },50);

    setTimeout(()=>{

        notify.classList.remove("show");

    },3500);

    setTimeout(()=>{

        notify.remove();

    },4200);

}

setTimeout(()=>{

    toast("🟢 Connected to Atlantica Server");

},2500);

setTimeout(()=>{

    toast("🎁 GM Invasion Every Day 20:00 WIB");

},6500);

setTimeout(()=>{

    toast("👥 Welcome to AODC V5");

},10000);




"use strict";



const cursor=document.createElement("div");

cursor.className="cursorGlow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});




function createParticle(){

const p=document.createElement("div");

p.className="fireParticle";

p.style.left=Math.random()*window.innerWidth+"px";

p.style.animationDuration=(Math.random()*3+4)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},7000);

}

setInterval(createParticle,250);




function enterExplosion(){

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.className="enterParticle";

star.style.left="50%";

star.style.top="50%";

star.style.setProperty("--x",(Math.random()*700-350)+"px");

star.style.setProperty("--y",(Math.random()*700-350)+"px");

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1800);

}

}

if(enterWorld){

enterWorld.addEventListener("click",enterExplosion);

}




const announce=document.getElementById("announcement");

if(announce){

const news=[

"🔥 Welcome To Atlantica Online Dream Cometrue",

"⚔ GM Invasion Every Day 20:00 WIB",

"👑 Level Max 150",

"💎 Free To Play",

"🎁 Weekly Champion",

"⭐ Enjoy Your Adventure"

];

let index=0;

announce.innerHTML=news[0];

setInterval(()=>{

index++;

if(index>=news.length){

index=0;

}

announce.innerHTML=news[index];

},5000);

}




document.querySelectorAll(".dropItem").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.08)";

item.style.boxShadow="0 0 35px gold";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

item.style.boxShadow="";

});

});




document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});




document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(gmModal){

gmModal.classList.remove("active");

}

if(downloadModal){

downloadModal.classList.remove("active");

}

}

});




document.addEventListener("contextmenu", function(e){

    e.preventDefault();

    const popup = document.getElementById("rightClickWarning");
    const sound = document.getElementById("warningSound");

    if(popup){

        popup.classList.add("show");

    }

    if(sound){

        sound.pause();
        sound.currentTime = 0;
        sound.play().catch(()=>{});

    }

});


function closeWarning(){

    const popup = document.getElementById("rightClickWarning");
    const sound = document.getElementById("warningSound");


    if(popup){

        popup.classList.remove("show");

    }


    if(sound){

        sound.pause();
        sound.currentTime = 0;

    }

}



document.addEventListener("copy",(e)=>{

e.preventDefault();

});




const preload=[

"assets/images/logo.png",

"assets/images/welcome-banner.jpg",

"assets/images/atlas.png",

"assets/images/agc.png",

"assets/images/apc.png"

];

preload.forEach(src=>{

const img=new Image();

img.src=src;

});




if(bgVideo){

bgVideo.load();

}




window.addEventListener("load",()=>{

console.clear();

console.log("%cAODC V5 ULTIMATE","font-size:22px;color:gold;font-weight:bold;");

console.log("Website Loaded Successfully");

toast("🚀 Website Ready");

});




window.addEventListener("error",(e)=>{

console.warn("AODC Error :",e.message);

});




const VERSION="AODC V5 ULTIMATE FINAL";

console.log(VERSION);




function openGMModal() {

    const modal = document.getElementById("gmModal");

    if (modal) {
        modal.classList.add("active");
    }

}

function closeGMModal() {

    const modal = document.getElementById("gmModal");

    if (modal) {
        modal.classList.remove("active");
    }

}



const warningPopup = document.getElementById("rightClickWarning");
const warningSound = document.getElementById("warningSound");

document.addEventListener("contextmenu", function(e){

    e.preventDefault();

    warningPopup.classList.add("show");

    warningSound.pause();
    warningSound.currentTime = 0;

    warningSound.play();

});

function closeWarning(){

    warningPopup.classList.remove("show");

    warningSound.pause();

    warningSound.currentTime = 0;

}



const closeWarningBtn = document.getElementById("closeWarningBtn");

if(closeWarningBtn){

    closeWarningBtn.addEventListener("click", function(){

        const popup = document.getElementById("rightClickWarning");
        const sound = document.getElementById("warningSound");

        if(popup){
            popup.classList.remove("show");
        }

        if(sound){
            sound.pause();
            sound.currentTime = 0;
        }

    });

}



function openRadminModal(){

    document
    .getElementById("radminModal")
    .style.display="flex";

}


function closeRadminModal(){

    document
    .getElementById("radminModal")
    .style.display="none";

}



function openUpdateModal(){

    document
    .getElementById("updateModal")
    .style.display="flex";

}


function closeUpdateModal(){

    document
    .getElementById("updateModal")
    .style.display="none";

}



function openUpdateModal(){

    document.getElementById("updateModal").style.display="flex";

}


function closeUpdateModal(){

    document.getElementById("updateModal").style.display="none";

}



let npcIndex = 1;


const npcImages = [

    "assets/images/npc/npc1.jpg",

    "assets/images/npc/npc2.jpg",

    "assets/images/npc/npc3.jpg"

];



function openNPCModal(){

    document
    .getElementById("npcModal")
    .style.display="flex";


    npcIndex = 0;

    showNPC();

}




function closeNPCModal(){

    document
    .getElementById("npcModal")
    .style.display="none";

}



function showNPC(){

    const img = document.getElementById("npcImage");


    if(img){

        img.style.animation="none";

        setTimeout(()=>{

            img.style.animation="npcFade .4s ease";

        },10);


        img.src = npcImages[npcIndex];

    }

}




function nextNPC(){

    npcIndex++;


    if(npcIndex >= npcImages.length){

        npcIndex = 0;

    }


    showNPC();

}





function prevNPC(){

    npcIndex--;


    if(npcIndex < 0){

        npcIndex = npcImages.length - 1;

    }


    showNPC();

}


document.addEventListener("DOMContentLoaded", function () {

    const streamerBtn = document.getElementById("streamerBtn");
    const streamerModal = document.getElementById("streamerModal");
    const closeStreamer = document.getElementById("closeStreamer");

    if (!streamerBtn || !streamerModal || !closeStreamer) {
        return;
    }

    
    streamerBtn.addEventListener("click", function (e) {

        e.preventDefault();

        streamerModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

    
    closeStreamer.addEventListener("click", function () {

        streamerModal.style.display = "none";

        document.body.style.overflow = "";

    });

   
    streamerModal.addEventListener("click", function (e) {

        if (e.target === streamerModal) {

            streamerModal.style.display = "none";

            document.body.style.overflow = "";

        }

    });

   
    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            streamerModal.style.display = "none";

            document.body.style.overflow = "";

        }

    });

});

document.addEventListener("DOMContentLoaded", ()=> {

    initCountdown();
    
    if(enterWorld){
        enterWorld.addEventListener("click", startLoading);
    }

    document.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            startLoading();
        }
    });
});

/*==========================
LIVE SVG CLOCK
==========================*/

function updateGMClock(){

const now=new Date();

const h=now.getHours()%12;

const m=now.getMinutes();

const s=now.getSeconds();

const hourDeg=(h*30)+(m*0.5);

const minuteDeg=(m*6)+(s*0.1);

const secondDeg=s*6;

document.getElementById("hourHand")
.setAttribute(
"transform",
`rotate(${hourDeg} 50 50)`
);

document.getElementById("minuteHand")
.setAttribute(
"transform",
`rotate(${minuteDeg} 50 50)`
);

document.getElementById("secondHand")
.setAttribute(
"transform",
`rotate(${secondDeg} 50 50)`
);

}

updateGMClock();

setInterval(updateGMClock,1000);


/* ===========================
   REALISTIC SERVER PING
=========================== */

const pingText = document.getElementById("serverPing");

if (pingText) {

    let ping = 18;

    function updatePing() {

        
        if (Math.random() < 0.10) {

            ping = Math.floor(Math.random() * 21) + 30;
          

        } else {

            ping += Math.floor(Math.random() * 3) - 1;

            if (ping < 16) ping = 16;
            if (ping > 22) ping = 22;

        }

        pingText.textContent = ping + " ms";

    }

    updatePing();

    setInterval(updatePing, 1500);

}
